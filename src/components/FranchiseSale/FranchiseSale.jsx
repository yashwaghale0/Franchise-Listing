import { useRef, useState, useEffect } from "react";
import pickUp from "../../assets/images/pick-location.png";
import anchord from "../../assets/images/anchord-location.png";
import snapology from "../../assets/images/snapolofy.png";
import jam from "../../assets/images/Sacramento.png";
import { CiLocationOn } from "react-icons/ci";
import { FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbCirclePercentage } from "react-icons/tb";

const Testing = () => {
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
    },
  ];

  const scrollByAmount = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector(".franchise-card");
    return card.offsetWidth + 20; // +gap
  };

  const nextSlide = () => {
    sliderRef.current.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
  };

  const prevSlide = () => {
    sliderRef.current.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
  };

  return (
    <div className="franchise-slider">
      <div className="container">
        {/* Header Section */}
        <div className="mb-4">
          <h2 className="buy-heading">
            {" "}
            Not Sure What Franchise is Best for You?
          </h2>
          <p className="subtext">
            Connect with an expert franchise broker to help you navigate
            options, streamline the process, and find the right fit. It’s 100%
            free.
          </p>
          <p className="location_enabled">
            <CiLocationOn size={18} />
            Populated Result Based on Location Enabled
          </p>
        </div>

        {/* Arrows */}
        <div className="arrow-buttons">
          <button className="prev_button" onClick={prevSlide}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="next-button" onClick={nextSlide}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        {/* Scrollable Cards */}
        <div className="slider-container" ref={sliderRef}>
          {franchiseData.map((franchise) => (
            <div key={franchise.id} className="franchise-card">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-3 location-card-img">
                    <img
                      src={franchise.logo}
                      alt={franchise.name}
                      className="img-fluid "
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="franchise-name">{franchise.name}</h5>
                    <p className="franchise-description">
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
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse Button */}
        <div className="text-center Browse_section">
          <button className="browse-button">
            Browse Franchise Opportunities
            <i className="bi bi-arrow-right right-arrow"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testing;
