import React, { useState, useEffect } from "react";
import "./Testing.css";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaStar } from "react-icons/fa";

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
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Anthony Richard",
      company: "Trusted Property Advisors, LLC",
      verified: true,
      reviews: 60,
      rating: 4.9,
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Isabelle Cardoso",
      company: "Refine Brands",
      verified: true,
      reviews: 42,
      rating: 4.9,
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "David Morgan",
      company: "Prime Franchise Group",
      verified: true,
      reviews: 34,
      rating: 4.8,
    },
    {
      id: 4,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Anthony Richard",
      company: "Prime Franchise Group",
      verified: true,
      reviews: 34,
      rating: 4.8,
    },
    {
      id: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Isabelle Cardoso",
      company: "Prime Franchise Group",
      verified: true,
      reviews: 34,
      rating: 4.8,
    },
    {
      id: 6,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "David Morgan",
      company: "Prime Franchise Group",
      verified: true,
      reviews: 34,
      rating: 4.8,
    },
  ];

  const itemsPerSlide = isMobile ? 1 : 2;
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
            <h2 className="buy-heading">Find the Perfect Franchise Location</h2>
            <p className="subtext">
              Connect with real estate who specialize in franchise site
              selection and lease negotiations.
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
                className={isMobile ? "col-12" : "col-lg-6 col-md-6"}
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
                    <div className="broker-card" key={franchise.id}>
                      <div className="broker-profile">
                        <div className="broker-image-border">
                          <img
                            src={franchise.image}
                            alt={franchise.name}
                            className="broker-image"
                          />
                        </div>
                        <div className="broker-info desktop-broker">
                          <h4>{franchise.name}</h4>
                          <p>{franchise.company}</p>
                          <div className="badge-row py-1">
                            {franchise.verified && (
                              <span className="verified-badge">
                                <FaFacebookF /> Verified
                              </span>
                            )}
                          </div>
                          <div className="badge-row py-1">
                            <span className="reviews">
                              {franchise.reviews} Placement Reviews
                            </span>
                          </div>
                        </div>
                        <div className="rating-badge rating-desktop">
                          {franchise.rating} <FaStar className="star-icon" />
                        </div>
                        <div className="Mobile_card">
                          <div className="badge-row py-1">
                            <span className="d-flex align-items-center gap-10 broker-rate">
                              {franchise.rating}{" "}
                              <FaStar className="star-icon" />
                            </span>
                            <span className="meta-verify">
                              {franchise.verified && (
                                <span className="verified-badge">
                                  <FaFacebookF /> Verified
                                </span>
                              )}
                            </span>
                          </div>
                          <h4>{franchise.name}</h4>
                          <p>{franchise.company}</p>
                          <div className="badge-row py-1">
                            <span className="reviews">
                              {franchise.reviews} Placement Reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Browse Button */}
        <div className="text-center Browse_section mt-4">
          <button className="browse-button">
            Find a Franchise Broker{" "}
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
