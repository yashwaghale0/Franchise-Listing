import { useState } from "react";
import { BsSliders } from "react-icons/bs";
import FilterPopup from "./FilterPopup";
import "./Hero.css";
import { IoSearch } from "react-icons/io5";

export default function Hero() {
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    subcategory: "",
    range: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleApplyFilters = (appliedFilters) => {
    setFilters(appliedFilters);
    setShowFilter(false);

    // 👉 You can log or send the filter values to a parent or backend
    console.log("Applied Filters:", appliedFilters);
  };

  const handleSearch = () => {
    console.log("Search Term:", searchTerm);
    console.log("With Filters:", filters);
    // You can trigger your search/filtering logic here
  };

  return (
    <div className="hero_section relative">
      <h1>The World's Leading Franchise Marketplace</h1>
      <p>
        Discover the right franchise opportunity and connect with top industry
        professionals to make your move.
      </p>

      <div className="filter-section d-flex gap-10 justify-content-center relative z-40">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="btn select-button d-flex gap-10 align-items-center bg-white"
        >
          <BsSliders />
        </button>

        <span className="hero-searchbar d-flex align-items-center justify-content-between">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for Franchise Opportunities, Locations, Etc..."
            className="w-100 outline-0"
          />
          <IoSearch
            size={20}
            onClick={handleSearch}
            style={{ cursor: "pointer" }}
          />
        </span>
      </div>

      {/* Filter Popup */}
      <div className="absolute top-[245px] left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4 FilterPopup">
        {showFilter && (
          <FilterPopup
            onClose={() => setShowFilter(false)}
            onApplyFilters={handleApplyFilters}
          />
        )}
      </div>
    </div>
  );
}
