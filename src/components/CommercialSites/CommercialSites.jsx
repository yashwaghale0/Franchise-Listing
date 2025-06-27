import { useRef, useState, useEffect } from "react";
import pickUp from "../../assets/images/pick-location.png";
import anchord from "../../assets/images/anchord-location.png";
import snapology from "../../assets/images/snapolofy.png";
import "./CommercialSites.css";
import { CiLocationOn } from "react-icons/ci";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const Testing = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [monthlyBudget, setMonthlyBudget] = useState("");

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
      code: "00002124",
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
      code: "00002245",
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
      code: "00002249",
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
      code: "00002457",
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
      code: "00002365",
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
      code: "00002478",
    },
  ];

  const rightScrollByAmount = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector(".franchisecomm-card");
    return card.offsetWidth + 20; // +gap
  };

  const leftScrollByAmount = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector(".franchisecomm-card");
    return card.offsetWidth + 120; // +gap
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
        <div className="mobilefixed-card ">
          {/* Mimic Zillow BuyAbility card here */}
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
          <button
            className="btn btn-primary w-100 mt-3 lets-get-started"
            onClick={() => setIsOpen(true)}
          >
            Let’s get started
          </button>
        </div>

        {/* Header Section */}
        <div className="mb-4">
          <h2 className="buy-heading">
            {" "}
            Find Franchise you can afford with FranAbility℠
          </h2>
          <p className="subtext">
            Answer a few questions. We'll highlight franchises you're likely to
            qualify for.
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

        <div className="slider-flex-wrapper align-items-center">
          {/* Fixed Card */}
          <div className="fixed-card">
            {/* Mimic Zillow BuyAbility card here */}
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
            <button
              className="btn btn-primary w-100 mt-3 lets-get-started"
              onClick={() => setIsOpen(true)}
            >
              Let’s get started
            </button>
          </div>

          {isOpen && (
            <div className="modal-overlay">
              <div className="modal-container">
                <div className="modal-header">
                  <span></span>
                  <h2>
                    FranAbility<sup>SM</sup>
                  </h2>
                  <button
                    className="close-btn"
                    onClick={() => setIsOpen(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <p className="modal-subheading">
                    <strong>
                      Buying a franchise is a big step. This tool will help you
                      assess what you may afford and qualify for. Answer as best
                      as you can, even if you're unsure of some details.
                    </strong>
                  </p>
                  <div>
                    <p className="modal-text">Tell us about your plans</p>

                    <div className="form-group">
                      <label>
                        Where do you plan to own or operate your franchise?{" "}
                        <span className="required">*</span>
                      </label>
                      <select
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      >
                        <option value="">Select a state</option>
                        <option value="FL">Florida</option>
                        <option value="CA">California</option>
                        <option value="NY">New York</option>
                      </select>
                      <small>
                        Enter the state or region you're targeting for your
                        franchise business.
                      </small>
                    </div>

                    <div className="input-wrapper">
                      <label>
                        How much do you currently have set aside to invest?{" "}
                        <span className="required">*</span>
                      </label>
                      <div className="position-relative">
                        <span className="prefix">$</span>
                        <input
                          type="number"
                          className="centered-input"
                          placeholder="Enter your available investment capital"
                        />
                      </div>
                      <small>
                        This includes cash, savings, or liquid assets you’re
                        ready to use.
                      </small>
                    </div>

                    <div className="input-wrapper">
                      <label>
                        What monthly income or cash flow are you hoping to
                        achieve? <span className="required">*</span>
                      </label>
                      <div className="position-relative">
                        <span className="prefix">$</span>
                        <input
                          type="number"
                          className="centered-input"
                          placeholder="Enter your target monthly income"
                        />
                      </div>
                      <small>
                        We'll match you with franchises whose financial profiles
                        align with your goals.
                      </small>
                    </div>
                  </div>
                  <div>
                    <p className="modal-text">Tell us about your finances</p>

                    <div className="input-wrapper">
                      <label>
                        What is your annual household income (before taxes)?{" "}
                        <span className="required">*</span>
                      </label>
                      <div className="position-relative">
                        <span className="prefix">$</span>
                        <input
                          type="number"
                          className="centered-input"
                          placeholder="Enter annual income"
                        />
                        <span className="suffix">/year</span>
                      </div>
                      <small>
                        We'll match you with franchises whose financial profiles
                        align with your goals.
                      </small>
                    </div>

                    <div className="input-wrapper">
                      <label>
                        What are your current monthly debt obligations?{" "}
                        <span className="required">*</span>
                      </label>
                      <div className="position-relative">
                        <span className="prefix">$</span>
                        <input
                          type="number"
                          className="centered-input"
                          placeholder="Enter minimum monthly debt payments"
                        />
                        <span className="suffix">/year</span>
                      </div>
                      <small>
                        This includes minimum payments for credit cards, student
                        loans, car loans, alimony, or child support.
                      </small>
                    </div>

                    <div className="form-group">
                      <label>
                        What is your credit score?{" "}
                        <span className="required">*</span>
                      </label>
                      <select
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      >
                        <option value="">Select a range:</option>
                        <option value="FL">740+ Excellent</option>
                        <option value="CA">700–739 Good</option>
                        <option value="NY">640–699 Fair</option>
                        <option value="NY">Below 640 Needs Improvement</option>
                        <option value="NY">Not Sure</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  {/* <p className="privacy-text">
                    We’ll store your data according to the{" "}
                    <a href="#">Zillow Home Loans Privacy Policy</a>
                  </p> */}
                  <button className="submit-btn">
                    See what you can afford
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Scrollable Cards */}
          <div
            className="slider-container commercialSlider-container"
            ref={sliderRef}
          >
            {franchiseData.map((franchise) => (
              <div key={franchise.id} className="franchisecomm-card">
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
                            <tr>
                              <td>
                                <span className="unique_code">
                                  FLS ID #CRE{franchise.code}
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
        {/* <div className="text-center Browse_section">
          <button className="browse-button">
            Browse Franchise Opportunities
            <i class="bi bi-arrow-right right-arrow"></i>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Testing;
