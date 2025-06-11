import { useState } from "react";
import { BsSliders } from "react-icons/bs";
import FilterPopup from "./FilterPopup"; // import this
import "./Hero.css"; // import your CSS file

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
          <span className="filter-text"></span>
        </button>

        <input
          type="text"
          placeholder="Search for Franchise Opportunities, Locations, Etc..."
          className="hero-searchbar"
        />
      </div>

      {/* Popup */}
      {showFilter && <FilterPopup onClose={() => setShowFilter(false)} />}
    </div>
  );
}
