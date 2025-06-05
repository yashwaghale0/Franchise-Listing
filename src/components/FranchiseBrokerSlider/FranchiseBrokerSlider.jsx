import Slider from "react-slick";
import "./FranchiseBrokerSlider.css";
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
  {
    id: 4,
    name: "David Morgan",
    company: "Prime Franchise Group",
    verified: true,
    reviews: 34,
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 5,
    name: "David Morgan",
    company: "Prime Franchise Group",
    verified: true,
    reviews: 34,
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function FranchiseBrokerSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="broker-slider-container">
      <div className="Inner-section">
        <h2>Not Sure What Franchise is Best for You?</h2>
        <p>
          Connect with an expert franchise broker to help you navigate options,
          streamline the process, and find the right fit. It’s{" "}
          <strong>100% free.</strong>
        </p>
        <p className="location_enabled">
          <CiLocationOn size={18} />
          Populated Result Based on Location Enabled
        </p>
        <div className="slider-wrapper">
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
                  <div className="broker-info desktop-broker">
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
                      <span className="reviews">
                        {broker.reviews} Placement Reviews
                      </span>
                    </div>
                  </div>
                  <div className="rating-badge rating-desktop">
                    {broker.rating} <FaStar className="star-icon" />
                  </div>
                  <div className="Mobile_card">
                    <div className="badge-row py-1">
                      <span className="d-flex align-items-center gap-10 broker-rate">
                        {broker.rating} <FaStar className="star-icon" />
                      </span>
                      <span className="meta-verify">
                        {broker.verified && (
                          <span className="verified-badge">
                            <FaFacebookF /> Verified
                          </span>
                        )}
                      </span>
                    </div>
                    <h4>{broker.name}</h4>
                    <p>{broker.company}</p>
                    <div className="badge-row py-1">
                      <span className="reviews">
                        {broker.reviews} Placement Reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <button className="gradient-border-button">
          Find a Franchise Broker →
        </button>
      </div>
    </div>
  );
}
