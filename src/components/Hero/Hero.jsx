import "./Hero.css";
import { CiFilter } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <>
      <div className="hero_section">
        <h1>The World's Leading Franchise Marketplace</h1>
        <p>
          Discover the right franchise opportunities and connect with top
          industry professionals to make your move
        </p>
        <div className="filter-section d-flex gap-10 justify-content-center">
          <button className="btn select-button d-flex gap-10 align-items-center">
            <CiFilter />
            Select Filter
            <FaChevronRight />
          </button>
          <input
            type="text"
            placeholder="Search for Franchise Opportunities Location Etc..."
            className="hero-searchbar"
          />
        </div>
      </div>
    </>
  );
}
