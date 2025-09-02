import React, { useState, useEffect, useRef } from "react";
import "./FranchiseBrokerSlider.css";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaStar } from "react-icons/fa";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Tooltip from "@mui/material/Tooltip";

const FranchiseBrokerSlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);
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

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const atStart = container.scrollLeft === 0;
      const atEnd =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 1;

      setIsAtStart(atStart);
      setIsAtEnd(atEnd);
    };

    // Initial check on mount
    handleScroll();

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  ];

  const nextSlide = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const card = container.querySelector(".scroll-item");
      const cardWidth = card?.offsetWidth || 300;
      container.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
    }
  };

  const prevSlide = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const card = container.querySelector(".scroll-item");
      const cardWidth = card?.offsetWidth || 300;
      container.scrollBy({ left: -cardWidth - 16, behavior: "smooth" });
    }
  };

  return (
    <div className="franchiseBroker-slider">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="buy-heading d-flex align-items-center gap-10">
              Not Sure What Franchise is Best for You?
              <Tooltip title="Populated Result Based on Location Enabled" arrow>
                <span>
                  <CiLocationOn size={18} />
                </span>
              </Tooltip>
            </h2>
            <p className="subtext">
              Connect with an expert franchise broker to help you navigate
              options, streamline the process, and find the right fit. It’s 100%
              free.
            </p>
          </div>
        </div>

        <div className="position-relative">
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

          <div
            className="scroll-container d-flex gap-3 overflow-auto franchisebroker-slider"
            style={{ scrollSnapType: "x mandatory" }}
            ref={scrollContainerRef}
          >
            {franchiseData.map((franchise) => (
              <div
                key={franchise.id}
                className="scroll-item card h-100 border-0 shadow-sm"
                style={{
                  flex: "0 0 42%",
                  borderRadius: "15px",
                  scrollSnapAlign: "start",
                }}
              >
                <div className="card-body p-0">
                  <div className="broker-card">
                    <div className="broker-profile">
                      <div className="broker-image-border">
                        <img
                          src={franchise.image}
                          alt={franchise.name}
                          className="broker-image"
                        />
                      </div>
                      <div className="broker-info mobile-broker ">
                        <div className=" rating-mobile d-flex align-items-center border rounded px-3 py-1 gap-10">
                          {franchise.rating} <FaStar className="star-icon" />
                        </div>
                        <div className="badge-row py-1">
                          {franchise.verified && (
                            <span className="verified-badge">
                              <FaFacebookF /> Verified
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="broker-info desktop-broker">
                        <h4>{franchise.name}</h4>
                        <p>{franchise.company}</p>
                        <div className="badge-row desktop-badge py-1">
                          {franchise.verified && (
                            <span className="verified-badge">
                              <FaFacebookF /> Verified
                            </span>
                          )}
                        </div>
                        <div className="badge-row  franchise-review-mob py-1">
                          <span className="reviews">
                            {franchise.reviews} Franchise Broker
                          </span>
                        </div>
                      </div>
                      <div className="rating-badge rating-desktop">
                        {franchise.rating} <FaStar className="star-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center Browse_section mt-4">
          <button className="browse-button">
            Find a Franchise Broker{" "}
            <i className="bi bi-arrow-right right-arrow"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FranchiseBrokerSlider;
