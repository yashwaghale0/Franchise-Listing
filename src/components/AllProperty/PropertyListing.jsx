import { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Pagination from "./Pagination";
import AdCard from "./AdCard"; // Make sure this path is correct
import { BACKEND_URL } from "../../../env.js";

const LISTINGS_PER_PAGE = 10; // 10 real listings, 2 ads = 12 cards total

const PropertyListing = ({ query }) => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const formatUSD = (value) => {
    const number = parseFloat(value);
    return isNaN(number)
      ? "$0"
      : new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(number);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/opportunities`);
        const formatted = res.data.map((item, index) => ({
          id: item._id || index,
          logo: item.brandLogo || "/placeholder.jpg",
          name: item.brandName || "No Title",
          category: item.category || "No category",
          subcategory: item.subcategory || "No subcategory",
          description: item.aboutUs || "No Description",
          priceLow: formatUSD(item.investmentLow || 0),
          priceHigh: formatUSD(item.investmentHigh || 0),
          franchisefee: formatUSD(item.franchiseFee || 0),
          royalty: `${item.royaltyFee || 0}%`,
          date: item.foundedDate
            ? new Date(item.foundedDate).getFullYear()
            : "N/A",
          returns: item.royaltyFee || "N/A",
          units: item.franchiseLocations
            ? `${item.franchiseLocations} Units`
            : "N/A",
          image: item.brandBanner || "/placeholder.jpg",
          code: item._id?.slice(-6) || "000000",
        }));
        setAllData(formatted);
        setFilteredData(formatted);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (query && allData.length > 0) {
      const lowerQuery = query.toLowerCase();
      const result = allData.filter(
        (item) =>
          item.name.toLowerCase().includes(lowerQuery) ||
          item.description.toLowerCase().includes(lowerQuery)
      );
      setFilteredData(result);
    } else {
      setFilteredData(allData);
    }
    setCurrentPage(1);
  }, [query, allData]);

  const indexOfLastItem = currentPage * LISTINGS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - LISTINGS_PER_PAGE;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const renderCardsWithAds = () => {
    const cards = [];
    let listingIndex = 0;

    for (let position = 1; position <= 12; position++) {
      if (position === 4 && listingIndex < currentItems.length) {
        cards.push(<AdCard key="ad-4" type="white" />);
      } else if (position === 9 && listingIndex < currentItems.length) {
        cards.push(<AdCard key="ad-9" type="purple" />);
      } else if (listingIndex < currentItems.length) {
        cards.push(
          <PropertyCard
            key={currentItems[listingIndex].id}
            data={currentItems[listingIndex]}
          />
        );
        listingIndex++;
      }
    }

    return cards;
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (!filteredData.length)
    return <p className="text-center">No results found.</p>;

  return (
    <div className="property-listing-wrapper">
      <div className="grid col-sm-12">{renderCardsWithAds()}</div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredData.length / LISTINGS_PER_PAGE)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PropertyListing;
