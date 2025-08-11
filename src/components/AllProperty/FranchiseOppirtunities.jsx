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
import ListHeader from "../Header/ListingHeader";
import { FaAngleDown } from "react-icons/fa6";
import mobileClose from "../../assets/images/mobile-close.png";

const FranchiseOpportunities = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [query, setQuery] = useState("");
  const [range, setRange] = useState(0);

  // SearchFilter
  const [openSelectSearch, setOpenSelectSearch] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "Franchise Opportunities"
  );
  const [rangeValue, setRangeValue] = useState(0);

  const updateSliderBackground = (input) => {
    const min = parseInt(input.min);
    const max = parseInt(input.max);
    const val = parseInt(input.value);

    const percentage = ((val - min) / (max - min)) * 100;

    input.style.background = `linear-gradient(to right, #00db75 0%, #00b4db ${percentage}%, #ddd ${percentage}%)`;
  };

  return (
    <>
      <ListHeader />
      <StickyScrollHeader />
      <div className="franchise-opportunities">
        <div className="filter-section listing-flter-section d-flex gap-10 justify-content-center py-4 relative z-40">
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
        <div className="pb-4 search-select-container">
          {/* Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setOpenSelectSearch(true)}
              className="border border-gray-300 px-1 py-0 rounded-full text-gray-600 select-search-button"
            >
              Select Search <FaAngleDown />
            </button>
            <button
              onClick={() => setOpenFilters(true)}
              className="border border-gray-300 px-4 py-2 rounded-full text-gray-600 select-search-button"
            >
              Filters <FaAngleDown />
            </button>
            <button className="bg-blue-500 px-4 py-2 rounded-full text-white save-search-button">
              Save Search
            </button>
          </div>

          {/* Overlay */}
          {(openSelectSearch || openFilters) && (
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              onClick={() => {
                setOpenSelectSearch(false);
                setOpenFilters(false);
              }}
            />
          )}

          {/* Select Search Modal */}
          {openSelectSearch && (
            <div className="fixed inset-0 bg-white z-50 select-search-popup">
              <div className="max-w-md mx-auto py-6 px-0">
                {/* Header */}
                <div className="flex justify-between items-center filter-header pb-4 px-4 mb-4 ">
                  <button onClick={() => setOpenSelectSearch(false)}>
                    <img src={mobileClose} alt="Close" />
                  </button>
                  <h2 className="text-lg font-semibold">Select Search</h2>
                  <span className="w-6" />{" "}
                  {/* Just a spacer to balance layout */}
                </div>

                {/* Options List */}
                <div className="space-y-4">
                  {["Franchise Opportunities"].map((option) => (
                    <label
                      key={option}
                      htmlFor={option}
                      className={`d-flex items-center  border-bottom w-100 gap-10 rounded-md py-4 px-4 cursor-pointer transition `}
                    >
                      <input
                        type="radio"
                        id={option}
                        name="searchOption"
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => setSelectedOption(option)}
                        className="form-radio p-2 border"
                      />
                      <span className="text-sm font-medium select-text">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Filter Modal */}
          {openFilters && (
            <div className="fixed inset-0 z-50 bg-white filter-popup-modal">
              <div className="flex flex-col h-full py-4 px-0">
                {/* Header */}
                <div className="flex items-center justify-between filter-header pb-3 px-4">
                  <button onClick={() => setOpenFilters(false)}>
                    <img src={mobileClose} alt="Close" className="h-5 w-5" />
                  </button>
                  <h2 className="text-base font-semibold text-black flex-1 text-center">
                    35000 Results
                  </h2>
                  <span className="w-5" />{" "}
                  {/* Spacer to balance the layout visually */}
                </div>

                {/* Filter Fields */}
                <div className="filter-fields flex-col mt-6 space-y-4 px-4">
                  {["Search", "Country", "Category", "Subcategory"].map(
                    (label, index) => (
                      <select
                        key={index}
                        className="w-full border filter-input rounded-lg px-4 py-3 text-sm "
                      >
                        <option value="">{`Select ${label}`}</option>
                      </select>
                    )
                  )}

                  {/* Price Range */}
                  <div>
                    <label className="block text-sm mb-2 price-range-label">
                      Price Range Up to $
                      <span className="price-range-amt font-bold">
                        {Number(range).toLocaleString()}
                      </span>
                    </label>
                    <input
                      type="range"
                      min={5000}
                      max={1000000}
                      step={5000}
                      value={range}
                      onChange={(e) => {
                        setRange(e.target.value);
                        updateSliderBackground(e.target);
                      }}
                      className="w-full price-range"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-auto flex justify-between items-center px-2 pt-6 pb-4">
                  <button className="w-[48%] reset-filter-btn">
                    Reset filters
                  </button>
                  <button className="w-[48%] filter-apply-btn">Apply</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="searching-section">
          <h2 className="searching-heading">Results for Franchises for Sale</h2>
          <p className="Result-des">
            <span>3500</span>Results
          </p>
        </div>
        <PropertyListing query={query} />
      </div>
      <TempFooter />
    </>
  );
};

export default FranchiseOpportunities;
