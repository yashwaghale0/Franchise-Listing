import React, { useRef, useState, useEffect } from "react";
import pickUp from "../assets/images/pickup.svg";
import anchord from "../assets/images/anchored.svg";
import snapology from "../assets/images/snapology.svg";
import jam from "../assets/Jamba.svg";
import "./franchiseslider.css";
import { CiLocationOn } from "react-icons/ci";
import { FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbCirclePercentage } from "react-icons/tb";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

const FranchiseSlider = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const franchiseData = [
    {
      id: 1,
      logo: pickUp,
      name: "PickUp USA Basketball",
      description: "PickUp USA is known for our world-class facilities",
      price: "$500,000",
      year: "2023",
      roi: "6%",
      units: "50 units",
      code: "0000002023",
    },
    {
      id: 2,
      logo: snapology,
      name: "Snapology",
      description: "At Snapology, we believe learning should be fun.",
      price: "$200,000",
      year: "2023",
      roi: "6%",
      units: "20 units",
      code: "00002565",
    },
    {
      id: 3,
      logo: anchord,
      name: "Anchored Tiny Homes",
      description: "Anchored Tiny Homes was a Sacramento-area...",
      price: "$700,000",
      year: "2023",
      roi: "6%",
      units: "30 units",
      code: "00002565",
    },
    {
      id: 4,
      logo: jam,
      name: "Jamba",
      description: "Founded in the seaside town",
      price: "$600,000",
      year: "2023",
      roi: "6%",
      units: "40 units",
      code: "000002568",
    },
    {
      id: 5,
      logo: anchord,
      name: "Subway",
      description: "World famous sandwich franchise",
      price: "$300,000",
      year: "2023",
      roi: "8%",
      units: "100 units",
      code: "00002565",
    },
    {
      id: 6,
      logo: snapology,
      name: "McDonald's",
      description: "Leading fast food franchise globally",
      price: "$1,500,000",
      year: "2023",
      roi: "10%",
      units: "200 units",
      code: "000002568",
    },
  ];

  const rightScrollByAmount = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector(".franchise-card");
    return card.offsetWidth + 20; // +gap
  };

  const leftScrollByAmount = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector(".franchise-card");
    return card.offsetWidth + 100; // +gap
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
          <h2 className="buy-heading">Looking to Buy a Franchise</h2>
          <p className="subtext">
            Explore top franchise brands and discover new franchise
            opportunities in every industry.
          </p>
          <p className="location_enabled">
            <CiLocationOn size={18} />
            Populated Result Based on Location Enabled
          </p>
        </div>

        {/* Arrows */}
        <div className="arrow-buttons">
          <button className="prev_button" onClick={prevSlide}>
            <IoChevronBackOutline />
          </button>
          <button className="next-button" onClick={nextSlide}>
            <IoChevronForwardOutline />
          </button>
        </div>

        {/* Scrollable Cards */}
        <div className="slider-container" ref={sliderRef}>
          {franchiseData.map((franchise) => (
            <div key={franchise.id} className="franchise-card">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-2">
                  <div className="text-center mb-3 card-image">
                    <img
                      src={franchise.logo}
                      alt={franchise.name}
                      className="img-fluid image-card"
                    />
                  </div>
                  <h5 className="franchise-name">{franchise.name}</h5>
                  <p className="franchise-description mb-0">
                    {franchise.description}
                  </p>
                  <table className="table franchise-meta table-borderless mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <span className="stats-content">
                            <FaMoneyBillWave className="me-2" />
                            {franchise.price}
                          </span>
                        </td>
                        <td>
                          <span className="stats-content">
                            <FaCalendarAlt className="me-2" />
                            {franchise.year}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="stats-content">
                            <TbCirclePercentage className="me-2" />
                            {franchise.roi}
                          </span>
                        </td>
                        <td>
                          <span className="stats-content">
                            <MdOutlineLocationOn className="me-2" />
                            {franchise.units}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="unique_code">
                            FLS ID #OPPO{franchise.code}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse Button */}
        <div className="text-center Browse_section">
          <a
            href="/franchise_list/franchise-Opportunities"
            className="text-decoration-none"
          >
            <button className="browse-button">
              Browse Franchise Opportunities
              <i className="bi bi-arrow-right right-arrow"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FranchiseSlider;
