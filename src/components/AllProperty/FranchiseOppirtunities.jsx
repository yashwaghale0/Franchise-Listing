import { useState } from "react";
import PropertyListing from "../AllProperty/PropertyListing";
import { BsSliders } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import Footer from "../Footer/Footer";
import TempFooter from "../Footer/TempFooter";
import Header from "../Header/Header";
import "./SearchResults.css";
import FilterPopup from "../Hero/FilterPopup";
import StickyScrollHeader from "../Header/StickyScrollHeader";
import TempHeader from "../Header/TempHeader";

const FranchiseOpportunities = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <>
      <TempHeader />
      <StickyScrollHeader />
      <div className="franchise-opportunities">
        <div className="filter-section d-flex gap-10 justify-content-center py-4 relative z-40">
          <button className="btn select-button d-flex gap-10 align-items-center bg-white searchFilter">
            <BsSliders />
          </button>
          {showFilter && <FilterPopup onClose={() => setShowFilter(false)} />}

          <span className="searchhero-searchbar d-flex align-items-center justify-content-between">
            <input
              type="text"
              placeholder="Search for Franchise Opportunities, Locations, Etc..."
              className="w-100 outline-0"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <IoSearch size={20} />
          </span>

          {/* Popup */}
        </div>

        <PropertyListing query={query} />
      </div>
      <TempFooter />
    </>
  );
};

export default FranchiseOpportunities;
