import { useEffect, useState } from "react";
import logo from "../../assets/images/fl-logo.svg";
import { FaSearch, FaSlidersH } from "react-icons/fa";
import "./StickyScrollHeader.css";
import FilterPopup from "../Hero/FilterPopup";

// Optional: Import your FilterPopup component if available
// import FilterPopup from "./FilterPopup";

export default function StickyScrollHeader() {
  const [showSticky, setShowSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({}); // ✅ Add missing state

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 500); // header appears after 800px scroll
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleApplyFilters = (appliedFilters) => {
    setFilters(appliedFilters);
    setShowFilter(false);
    console.log("Applied Filters:", appliedFilters);
  };

  return (
    <div className={`sticky-scroll-header ${showSticky ? "visible" : ""}`}>
      <div className="sticky-header-content">
        <img src={logo} alt="Logo" className="sticky-logo" />

        <div className="sticky-header-actions">
          <button
            className="stickyfilter-btn"
            onClick={() => setShowFilter(!showFilter)}
          >
            <FaSlidersH />
          </button>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for Franchise Opportunities, Locations, Etc..."
            />
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
      {/* Filter popup (optional if implemented) */}
      <div className="relative top-[5px] left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4 stickyFilterPopup ml-2">
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
