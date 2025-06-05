import React from "react";
import Slider from "react-slick";
import "./FranchiseLocation.css";
import { FaFacebookF, FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

// Dummy data
const brokers = [
  {
    id: 1,
    name: "Anthony Richard",
    company: "Trusted Property Advisors, LLC",
    verified: true,
    reviews: 60,
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/men/32.jpg", // Add actual image paths
  },
  {
    id: 2,
    name: "Isabelle Cardoso",
    company: "Refine Brands",
    verified: true,
    reviews: 42,
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "David Morgan",
    company: "Prime Franchise Group",
    verified: true,
    reviews: 34,
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function FranchiseLocation() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    centerPadding: "30px",
  };

  return (
    <div className="broker-slider-container">
      <div className="Inner-section">
        <h2>Find the Perfect Franchise Location</h2>
        <p>
          Connect with real estate who specialize in franchise site selection
          and lease negotiations{" "}
        </p>

        <div className="slider-wrapper">
          <p className="location_enabled">
            <CiLocationOn size={18} />
            Populated Result Based on Location Enabled
          </p>
          <Slider {...settings}>
            {brokers.map((broker) => (
              <div className="broker-card" key={broker.id}>
                <div className="broker-profile">
                  <div className="broker-image-border">
                    <img
                      src={broker.image}
                      alt={broker.name}
                      className="broker-image"
                    />
                  </div>
                  <div className="broker-info">
                    <h4>{broker.name}</h4>
                    <p>{broker.company}</p>
                    <div className="badge-row py-1">
                      {broker.verified && (
                        <span className="verified-badge">
                          <FaFacebookF /> Verified
                        </span>
                      )}
                    </div>
                    <div className="badge-row py-1">
                      <span className="reviews ">
                        {broker.reviews} Placement Reviews
                      </span>
                    </div>
                  </div>
                  <div className="rating-badge">
                    {broker.rating} <FaStar className="star-icon" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <button className="gradient-border-button">
          Find a Real Estate Agent Broker →
        </button>
      </div>
    </div>
  );
}
