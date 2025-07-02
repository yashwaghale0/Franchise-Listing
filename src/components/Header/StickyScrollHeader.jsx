import { useEffect, useState } from "react";
import logo from "../../assets/images/fl-logo.svg";
import { FaSearch } from "react-icons/fa";
import { FaSlidersH } from "react-icons/fa"; // filter icon
import "./StickyScrollHeader.css";

export default function StickyScrollHeader() {
  const [showSticky, setShowSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`sticky-scroll-header ${showSticky ? "visible" : ""}`}>
      <div className="sticky-header-content">
        <img src={logo} alt="Logo" className="sticky-logo" />

        <div className="sticky-header-actions">
          <button className="stickyfilter-btn">
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
    </div>
  );
}
