import React, { useState, useEffect } from "react";
import "./CommercialSites.css";
import { CiLocationOn } from "react-icons/ci";
import pickUp from "../../assets/images/pick-location.png";
import anchord from "../../assets/images/anchord-location.png";
import snapology from "../../assets/images/snapolofy.png";

const Sites = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Load Bootstrap CSS and Icons
  useEffect(() => {
    // Bootstrap CSS
    const bootstrapCSS = document.createElement("link");
    bootstrapCSS.rel = "stylesheet";
    bootstrapCSS.href =
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css";
    document.head.appendChild(bootstrapCSS);

    // Bootstrap Icons
    const bootstrapIcons = document.createElement("link");
    bootstrapIcons.rel = "stylesheet";
    bootstrapIcons.href =
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.css";
    document.head.appendChild(bootstrapIcons);

    return () => {
      document.head.removeChild(bootstrapCSS);
      document.head.removeChild(bootstrapIcons);
    };
  }, []);

  // Auto-slide functionality
  // useEffect(() => {
  //   const autoSlideInterval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % franchiseData.length);
  //   }, 10000); // Auto-slide every 10 seconds

  //   return () => clearInterval(autoSlideInterval);
  // }, []);

  const franchiseData = [
    {
      id: 1,
      logo: pickUp,
      name: "From $10 SF/YR",
      address: "2100 Travis St Houston TX 77002 Up to 114,000 Sf",

      price: "$500,000",
      year: "2023",
      roi: "6%",
      units: "50 units",
    },
    {
      id: 2,
      logo: snapology,
      name: "From $58.80 SF/YR",
      address: "600 17th St Denver, CO 8202 Up to 800 Sf",
      price: "$200,000",
      year: "2023",
      roi: "6%",
      units: "20 units",
    },
    {
      id: 3,
      logo: anchord,
      name: "From $9 SF/YR",
      address: "4790-4802 Turney Rd Garfield Heights, OH 44125 Up to 15,900 Sf",
      price: "$700,000",
      year: "2023",
      roi: "6%",
      units: "30 units",
    },
    {
      id: 4,
      logo: pickUp,
      name: "From $9 SF/YR",
      address: "6222 San Fernando Rd Glendale, CA 91201 Up to 1,500 Sf",
      price: "$600,000",
      year: "2023",
      roi: "6%",
      units: "40 units",
    },
    {
      id: 5,
      logo: anchord,
      name: "Subway",
      address: "2100 Travis St Houston TX 77002 Up to 114,000 Sf",
      price: "$300,000",
      year: "2023",
      roi: "8%",
      units: "100 units",
    },
    {
      id: 6,
      logo: snapology,
      name: "McDonald's",
      address: "600 17th St Denver, CO 8202 Up to 800 Sf",
      price: "$1,500,000",
      year: "2023",
      roi: "10%",
      units: "200 units",
    },
  ];

  const itemsPerSlide = isMobile ? 1 : 4;
  const totalSlides = franchiseData.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const cardIndex = (currentSlide + i) % franchiseData.length;
      visibleCards.push(franchiseData[cardIndex]);
    }
    return visibleCards;
  };

  return (
    <div className="franchise-slider">
      <div className="container">
        {/* Header Section */}
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="buy-heading">Browse Commercial Real Estate Sited</h2>
            <p className="subtext">
              Search franchise ready real estate listings to secure your ideal
              business location.
            </p>
            <p className="location_enabled">
              <CiLocationOn size={18} />
              Populated Result Based on Location Enabled
            </p>
          </div>
        </div>

        {/* Slider Section */}
        <div className="position-relative">
          {/* Navigation Arrows */}
          <button
            className=" prev_button"
            style={{
              left: isMobile ? "-15px" : "93%",
              width: isMobile ? "30px" : "40px",
              height: isMobile ? "30px" : "40px",
            }}
            onClick={prevSlide}
          >
            <i class="bi bi-arrow-left"></i>
          </button>

          <button
            className=" next-button"
            style={{
              right: isMobile ? "-15px" : "0px",
              width: isMobile ? "30px" : "40px",
              height: isMobile ? "30px" : "40px",
            }}
            onClick={nextSlide}
          >
            <i class="bi bi-arrow-right"></i>
          </button>

          {/* Cards Container */}
          <div className="row g-4 justify-content-center mt-4">
            {getVisibleCards().map((franchise, index) => (
              <div
                key={`${franchise.id}-${currentSlide}-${index}`}
                className={isMobile ? "col-12" : "col-lg-3 col-md-6"}
              >
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: "15px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <div className="card-body p-0">
                    {/* Logo Section */}
                    <div className="text-center mb-3 ">
                      <div className="justify-content-center location-card-img">
                        <img
                          src={franchise.logo}
                          alt={franchise.name}
                          className="img-fluid image-card"
                        />
                      </div>
                    </div>

                    <div className="px-4 py-2">
                      {/* Content Section */}
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="franchise-name my-2">
                          {franchise.name}
                        </h5>
                        <i class="bi bi-suit-heart"></i>
                      </div>

                      {/* Stats Section */}
                      <div className="card-stats my-2">
                        <table className="table franchise-meta table-borderless mb-0">
                          <tbody>
                            <tr>
                              <td className="text-start align-middle p-0">
                                <span className="d-inline-flex align-items-center sites-stats">
                                  {franchise.address}
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
        <div className="text-center Browse_section ">
          <button className="browse-button">
            Browse Franchise Opportunities
            <i class="bi bi-arrow-right right-arrow"></i>
          </button>
        </div>

        {/* Slide Indicators
        <div className="text-center mt-4">
          {Array.from({ length: franchiseData.length }).map((_, index) => (
            <button
              key={index}
              className={`btn btn-sm rounded-circle mx-1 ${
                currentSlide === index ? 'btn-primary' : 'btn-outline-secondary'
              }`}
              style={{ width: '12px', height: '12px', padding: '0' }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Sites;
