import { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Pagination from "./Pagination";
import { BACKEND_URL } from "../../../env.js";

const ITEMS_PER_PAGE = 12;

const PropertyListing = ({ query }) => {
  const [allData, setAllData] = useState([]); // all data from API
  const [filteredData, setFilteredData] = useState([]); // filtered on search
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch data from API once on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await axios.get(
        //   "https://dev.franchiselistings.com/franchise_backend/api/opportunities"
        // );
        const res = await axios.get(`${BACKEND_URL}/api/opportunities`);
        const formatted = res.data.map((item) => ({
          id: item._id || index,
          logo: item.brandBanner || "/placeholder.jpg",
          name: item.brandName || "No Title",
          category: item.category || "No category",
          subcategory: item.subcategory || "No subcategory",
          description: item.aboutUs || "No Description",
          priceLow: `$${item.investmentLow || 0}`,
          priceHigh: `$${item.investmentHigh || 0}`,
          franchisefee: `$${item.franchiseFee || 0}`,
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

  // Apply search filtering
  useEffect(() => {
    if (query && allData.length > 0) {
      const lowerQuery = query.toLowerCase();
      const result = allData.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerQuery) ||
          item.description.toLowerCase().includes(lowerQuery)
      );
      setFilteredData(result);
    } else {
      setFilteredData(allData);
    }
    setCurrentPage(1);
  }, [query, allData]);

  // Pagination logic
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!filteredData.length)
    return <p className="text-center">No results found.</p>;

  return (
    <div className="property-listing-wrapper">
      <div className="grid col-sm-12">
        {currentItems.map((item) => (
          <PropertyCard key={item.id} data={item} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredData.length / ITEMS_PER_PAGE)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PropertyListing;
