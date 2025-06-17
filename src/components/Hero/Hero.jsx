import { useState } from "react";
import { BsSliders } from "react-icons/bs";
import FilterPopup from "./FilterPopup"; // import this
import "./Hero.css"; // import your CSS file
import { IoSearch } from "react-icons/io5";

export default function Hero() {
  const [showFilter, setShowFilter] = useState(false);

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
            placeholder="Search for Franchise Opportunities, Locations, Etc..."
            className="w-100 outline-0"
          />
          <IoSearch size={20} />
        </span>
      </div>

      {/* Popup */}
      {showFilter && <FilterPopup onClose={() => setShowFilter(false)} />}
    </div>
  );
}
