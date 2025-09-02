import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pickUp from "../assets/images/pickup.svg";
import anchord from "../assets/images/anchored.svg";
import snapology from "../assets/images/snapology.svg";
import jam from "../assets/Jamba.svg";
import Discover from "../assets/images/Discover-image.jpeg";
import "./franchiseslider.css";
import { CiLocationOn } from "react-icons/ci";
import { FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbCirclePercentage } from "react-icons/tb";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { BACKEND_URL } from "../../env";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import { CiHeart } from "react-icons/ci";

const FranchiseSlider = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [franchiseData, setFranchiseData] = useState([]);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const formatUSD = (value) => {
    const number = parseFloat(value);
    return isNaN(number)
      ? "$0"
      : new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(number);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/opportunities`);

        const formatted = res.data.slice(0, 7).map((item, index) => ({
          id: item._id || index,
          logo: item.brandLogo || "/placeholder.jpg",
          name: item.brandName || "No Title",
          category: item.category || "No category",
          subcategory: item.subcategory || "No subcategory",
          description: item.aboutUs || "No Description",
          priceLow: formatUSD(item.investmentLow || 0),
          priceHigh: formatUSD(item.investmentHigh || 0),
          franchisefee: formatUSD(item.franchiseFee || 0),
          royalty: `${item.royaltyFee || 0}%`,
          year: item.foundedDate
            ? new Date(item.foundedDate).getFullYear()
            : "N/A",
          roi: item.royaltyFee || "N/A",
          units: item.franchiseLocations
            ? `${item.franchiseLocations} Units`
            : "N/A",
          code: item._id?.slice(-6) || "000000",
        }));

        const exploreCard = {
          id: "explore",
          logo: Discover,
          name: "Discover More Opportunities",
          link: "/franchise-Opportunities",
          isExploreCard: true,
        };

        setFranchiseData([...formatted, exploreCard]);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      // Check if at the beginning
      const atStart = slider.scrollLeft === 0;
      // Check if at the end (with a small tolerance)
      const atEnd =
        slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1;

      setIsAtStart(atStart);
      setIsAtEnd(atEnd);
    };

    // Initial check when component mounts
    handleScroll();

    slider.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, [franchiseData]); // Re-run effect if data changes

  const rightScrollByAmount = () => {
    if (!sliderRef.current) return 0;
    const card = sliderRef.current.querySelector(".franchise-card");
    return card ? card.offsetWidth + 20 : 0; // +gap
  };

  const leftScrollByAmount = () => {
    if (!sliderRef.current) return 0;
    const card = sliderRef.current.querySelector(".franchise-card");
    return card ? card.offsetWidth + 20 : 0; // +gap
  };

  const nextSlide = () => {
    sliderRef.current.scrollBy({
      left: rightScrollByAmount(),
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    sliderRef.current.scrollBy({
      left: -leftScrollByAmount(),
      behavior: "smooth",
    });
  };

  return (
    <div className="franchise-slider">
      <div className="container">
        {/* Header Section */}
        <div className="mb-4">
          <h2 className="buy-heading d-flex align-items-center gap-10">
            Looking to Buy a Franchise{" "}
            <Tooltip title="Populated Result Based on Location Enabled" arrow>
              <span>
                <CiLocationOn size={18} />
              </span>
            </Tooltip>
          </h2>
          <p className="subtext">
            Explore top franchise brands and discover new franchise
            opportunities in every industry.
          </p>
        </div>

        {/* Arrows */}
        <div className="arrow-buttons">
          <button
            className={`prev_button ${isAtStart ? "disabled" : ""}`}
            onClick={prevSlide}
            disabled={isAtStart}
          >
            <IoChevronBackOutline />
          </button>
          <button
            className={`next-button ${isAtEnd ? "disabled" : ""}`}
            onClick={nextSlide}
            disabled={isAtEnd}
          >
            <IoChevronForwardOutline />
          </button>
        </div>

        {/* Scrollable Cards */}
        <div className="slider-container" ref={sliderRef}>
          {franchiseData.map((franchise) => {
            if (franchise.isExploreCard) {
              return (
                <div key={franchise.id} className="franchise-card">
                  <div className="card h-100 border-0 shadow-sm text-center p-4 d-flex flex-column justify-content-between">
                    <div className="mb-3 d-flex justify-content-center">
                      <img
                        src={franchise.logo}
                        alt="Explore Logo"
                        className="img-fluid"
                        style={{
                          objectFit: "contain",
                          borderRadius: "50%",
                          width: "70%",
                        }}
                      />
                    </div>
                    <h3 className="franchisecard-name">{franchise.name}</h3>
                    <Link to={franchise.link} className="See-more-btn">
                      See more <span className="text-success fs-20">→</span>
                    </Link>
                  </div>
                </div>
              );
            }

            // Regular franchise card
            return (
              <div key={franchise.id} className="franchise-card">
                <Link
                  to={`/franchise/${franchise.id}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 border-0 shadow-sm card-decoration">
                    <div className="card-body p-0">
                      <div className="text-center mb-3 card-image">
                        <img
                          src={franchise.logo}
                          alt={franchise.name}
                          className="img-fluid image-card"
                        />
                        <p className="card-label-badge">
                          <CiHeart size={24} />
                        </p>
                      </div>
                      <hr />
                      <h5 className="franchise-name px-2">{franchise.name}</h5>
                      <div className="d-flex gap-10 my-1 px-2">
                        <button className="category-btn">
                          {franchise.category}
                        </button>
                        <button className="category-btn">
                          {franchise.subcategory}
                        </button>
                      </div>

                      <div className="px-2">
                        <table className="table franchise-meta table-borderless mb-0 p-2">
                          <tbody>
                            <tr>
                              <td>
                                <span className="stats-content gap-10">
                                  <span className="card-icon-head">
                                    Inv Low
                                  </span>
                                  {franchise.priceLow}
                                </span>
                              </td>
                              <td>
                                <span className="stats-content gap-10">
                                  <span className="card-icon-head">
                                    Inv High
                                  </span>{" "}
                                  {franchise.priceHigh}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="stats-content gap-10">
                                  <span className="card-icon-head">
                                    Franchise Fee
                                  </span>
                                  {franchise.franchisefee}
                                </span>
                              </td>
                              <td>
                                <span className="stats-content gap-10">
                                  <span className="card-icon-head">
                                    Royalty
                                  </span>
                                  {franchise.royalty}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="unique_code">
                                  FLS ID #OPPO{franchise.code}
                                </span>
                              </td>
                              <td className="text-end">
                                <span className="learn-more-btn ">
                                  Learn More
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Browse Button */}
        <div className="text-center Browse_section">
          <Link
            to="/franchise-Opportunities"
            className="text-decoration-none justify-content-center d-flex"
          >
            <button className="browse-button d-flex align-items-center gap-10">
              Browse Franchise Opportunities
              <FaArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FranchiseSlider;
