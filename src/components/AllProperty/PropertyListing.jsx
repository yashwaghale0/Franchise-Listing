import { useState, useEffect } from "react";
import data from "./data";
import PropertyCard from "./PropertyCard";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 12;

const PropertyListing = ({ query }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (query) {
      const lowerQuery = query.toLowerCase();
      const result = data.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerQuery) ||
          item.description.toLowerCase().includes(lowerQuery)
      );
      setFilteredData(result);
    } else {
      setFilteredData(data);
    }
    setCurrentPage(1); // reset on query change
  }, [query]);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="property-listing-wrapper">
      <div className="grid">
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
