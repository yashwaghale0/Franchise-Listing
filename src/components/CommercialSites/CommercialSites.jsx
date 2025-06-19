import { useRef, useState, useEffect } from "react";
import pickUp from "../../assets/images/pick-location.png";
import anchord from "../../assets/images/anchord-location.png";
import snapology from "../../assets/images/snapolofy.png";
import jam from "../../assets/images/Sacramento.png";
import { CiLocationOn } from "react-icons/ci";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
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
          <h2 className="buy-heading"> Browse Commercial Real Estate Sited</h2>
          <p className="subtext">
            Search franchise ready real estate listings to secure your ideal
            business location.
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
                <div className="card-body p-0">
                  <div className="text-center mb-3 location-card-img">
                    <img
                      src={franchise.logo}
                      alt={franchise.name}
                      className="img-fluid "
                    />
                  </div>
                  <div className="px-4 py-2">
                    {/* Content Section */}
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="franchise-name ">{franchise.name}</h5>
                      <i class="bi bi-suit-heart"></i>
                    </div>

                    {/* Stats Section */}
                    <div className="card-stats ">
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
