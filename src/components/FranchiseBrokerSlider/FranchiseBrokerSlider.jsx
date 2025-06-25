import React, { useState, useEffect } from "react";
import "./FranchiseBrokerSlider.css";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaStar } from "react-icons/fa";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const FranchiseBrokerSlider = () => {
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
    const container = document.querySelector(".scroll-container");
    if (container) {
      const card = container.querySelector(".scroll-item");
      const cardWidth = card?.offsetWidth || 300;
      container.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
    }
  };

  const prevSlide = () => {
    const container = document.querySelector(".scroll-container");
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
            <h2 className="buy-heading">
              Not Sure What Franchise is Best for You?
            </h2>
            <p className="subtext">
              Connect with an expert franchise broker to help you navigate
              options, streamline the process, and find the right fit. It’s 100%
              free.
            </p>
            <p className="location_enabled">
              <CiLocationOn size={18} /> Populated Result Based on Location
              Enabled
            </p>
          </div>
        </div>

        <div className="position-relative">
          <button className="prev_button" onClick={prevSlide}>
            <IoChevronBackOutline />
          </button>
          <button className="next-button" onClick={nextSlide}>
            <IoChevronForwardOutline />
          </button>

          <div
            className="scroll-container d-flex gap-3 overflow-auto franchisebroker-slider"
            style={{ scrollSnapType: "x mandatory" }}
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
