import { useRef, useState, useEffect } from "react";
import pickUp from "../../assets/images/pick-location.png";
import anchord from "../../assets/images/anchord-location.png";
import snapology from "../../assets/images/snapolofy.png";
import jam from "../../assets/images/Sacramento.png";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbCirclePercentage } from "react-icons/tb";
import "./FranchiseSale.css";

const FranchiseSale = () => {
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
      code: "0000002456",
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
      code: "0000002125",
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
      code: "0000002458",
    },
    {
      id: 4,
      logo: pickUp,
      name: "Jamba",
      description: "Founded in the seaside town",
      price: "$600,000",
      year: "2023",
      roi: "6%",
      units: "40 units",
      code: "0000002129",
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
      code: "0000002356",
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
      code: "0000002457",
    },
  ];

  const rightScrollByAmount = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector(".franchiseSale-card");
    return card.offsetWidth + 20; // +gap
  };

  const leftScrollByAmount = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector(".franchiseSale-card");
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
    <div className="franchiseSale-slider">
      <div className="container">
        {/* <div className="mobilefixed-card ">
          
          <div className="card border shadow-sm p-3 text-center h-max-content homeloan-card">
            <h5 className="fixedcard-heading m-0">FranAbility™</h5>
            <p className="fixedcard-subhead">
              Find a franchise you can afford.
            </p>
            <div className="d-flex justify-content-between align-items-center ">
              <div className="my-2 d-flex flex-column align-items-start ">
                <span>$--</span>
                <small>Suggested franchise price</small>
              </div>
              <div className="my-2 d-flex flex-column align-items-start">
                <span>$--</span>
                <small>FranAbility™</small>
              </div>
            </div>
            <div className=" d-flex justify-content-between align-items-center">
              <div className="my-2 d-flex flex-column align-items-start">
                <span>$--</span>
                <small>Mo. payment</small>
              </div>
              <div className="my-2 d-flex flex-column align-items-start">
                <span>--%</span>
                <small>Today's rate</small>
              </div>
              <div className="my-2 d-flex flex-column align-items-start">
                <span>--%</span>
                <small>APR</small>
              </div>
            </div>
          </div>
          <button className="btn btn-primary w-100 mt-3 lets-get-started">
            Let’s get started
          </button>
        </div> */}

        {/* Header Section */}
        <div className="mb-4">
          <h2 className="buy-heading">Find a Franchise for Sale</h2>
          <p className="subtext">
            Explore fully operational franchise resale listings in your area and
            take over an existing business.
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

        {/* Main Slider Section */}
        <div className="slider-flex-wrapper align-items-center">
          {/* Fixed Card */}
          {/* <div className="fixed-card">
            
            <div className="card border shadow-sm p-3 text-center h-max-content homeloan-card">
              <h5 className="fixedcard-heading m-0">FranAbility™</h5>
              <p className="fixedcard-subhead">
                Find a franchise you can afford.
              </p>
              <div className="d-flex justify-content-between align-items-center ">
                <div className="my-2 d-flex flex-column align-items-start ">
                  <span>$--</span>
                  <small>Suggested franchise price</small>
                </div>
                <div className="my-2 d-flex flex-column align-items-start">
                  <span>$--</span>
                  <small>FranAbility™</small>
                </div>
              </div>
              <div className=" d-flex justify-content-between align-items-center">
                <div className="my-2 d-flex flex-column align-items-start">
                  <span>$--</span>
                  <small>Mo. payment</small>
                </div>
                <div className="my-2 d-flex flex-column align-items-start">
                  <span>--%</span>
                  <small>Today's rate</small>
                </div>
                <div className="my-2 d-flex flex-column align-items-start">
                  <span>--%</span>
                  <small>APR</small>
                </div>
              </div>
            </div>
            <button className="btn btn-primary w-100 mt-3 lets-get-started">
              Let’s get started
            </button>
          </div> */}

          {/* Scrollable Slider */}
          <div
            className="slider-container franchiseSale-Slider"
            ref={sliderRef}
          >
            {franchiseData.map((franchise) => (
              <div key={franchise.id} className="franchiseSale-card">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-0">
                    <div className="text-center mb-3 location-card-img">
                      <img
                        src={franchise.logo}
                        alt={franchise.name}
                        className="img-fluid "
                      />
                    </div>
                    <div className="p-2">
                      <h5 className="franchise-name">{franchise.name}</h5>
                      <p className="franchise-description mb-0">
                        {franchise.description}
                      </p>

                      {/* Stats Section */}
                      <div className="card-stats">
                        <table className="table franchise-meta table-borderless mb-0">
                          <tbody>
                            <tr>
                              <td className="text-start align-middle">
                                <span className="d-inline-flex align-items-center stats-content">
                                  <FaMoneyBillWave className="me-2" />
                                  {franchise.price}
                                </span>
                              </td>
                              <td className="text-start align-middle">
                                <span className="d-inline-flex align-items-center stats-content">
                                  <FaCalendarAlt className="me-2" />
                                  {franchise.year}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-start align-middle">
                                <span className="d-inline-flex align-items-center stats-content">
                                  <TbCirclePercentage className="me-2" />
                                  {franchise.roi}
                                </span>
                              </td>
                              <td className="text-start align-middle">
                                <span className="d-inline-flex align-items-center stats-content">
                                  <MdOutlineLocationOn className="me-2" />
                                  {franchise.units}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span className="unique_code">
                                  FLS ID #RES{franchise.code}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Browse Button */}
        <div className="text-center Browse_section">
          <button className="browse-button">
            Browse Franchise Resale
            <i className="bi bi-arrow-right right-arrow"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FranchiseSale;
