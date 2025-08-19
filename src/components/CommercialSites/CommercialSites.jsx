import { useRef, useState, useEffect } from "react";
import pickUp from "../../assets/images/pick-location.png";
import anchord from "../../assets/images/anchord-location.png";
import snapology from "../../assets/images/snapolofy.png";
import "./CommercialSites.css";
import { CiLocationOn } from "react-icons/ci";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import axios from "axios";
import { BACKEND_URL } from "../../../env.js";
import { InputMask } from "@react-input/mask";
import PopupImage from "../../assets/images/popup-image.svg";

const Testing = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [monthlyBudget, setMonthlyBudget] = useState("");

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchState, setSearchState] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [franchiseType, setFranchiseType] = useState("");
  const [cashOnHand, setCashOnHand] = useState("");
  const [totalAssets, setTotalAssets] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [monthlyDebt, setMonthlyDebt] = useState("");

  // From Submission
  const [formData, setFormData] = useState({
    firstName,
    lastName,
    phone,
    email,
    franchiseType,
    cashOnHand,
    totalAssets,
    Country: selectedCountry,
    state: selectedState,
    city: selectedCity,
  });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // Fetch countries
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/positions")
      .then((res) => {
        setCountries(res.data.data);
        console.log(res.data); // <-- Moved inside where `res` exists
      })
      .catch((err) => console.error(err));
  }, []);

  // Fetch states for selected country
  const fetchStates = async (country) => {
    try {
      const res = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/states",
        { country }
      );
      setStates(res.data.data.states);
      setCities([]);
      setSelectedState("");
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch cities for selected state
  const fetchCities = async (country, state) => {
    try {
      const res = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/state/cities",
        { country, state }
      );
      setCities(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${BACKEND_URL}/franability-send`, formData);
      alert("Enquiry sent successfully!");
      setIsOpen(false);
    } catch (err) {
      console.error(err);
      alert("Error sending enquiry.");
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

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
    <div className="franchisecomm-slider">
      <div className="container">
        {/* Header Section */}
        <div className="mb-0">
          <h2 className="buy-heading">
            {" "}
            Find a Franchise you can afford with FranAbility℠
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

        <div className="mobilefixed-card ">
          {/* Mimic Zillow BuyAbility card here */}
          <div className="card border shadow-sm p-3 text-center h-max-content homeloan-card">
            <h5 className="fixedcard-heading m-0">FranAbility℠</h5>
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
                <small>FranAbility℠</small>
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

        {/* Arrows */}
        {/* <div className="arrow-buttons">
          <button className="prev_button" onClick={prevSlide}>
            <IoChevronBackOutline />
          </button>
          <button className="next-button" onClick={nextSlide}>
            <IoChevronForwardOutline />
          </button>
        </div> */}

        <div className="slider-flex-wrapper align-items-center commercialSlider-container">
          {/* Fixed Card */}
          <div className="fixed-card">
            {/* Mimic Zillow BuyAbility card here */}
            <div className="card border shadow-sm p-3 text-center h-max-content homeloan-card">
              <h5 className="fixedcard-heading m-0">FranAbility℠</h5>
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
                  <small>FranAbility℠</small>
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
            <div className="modal-overlay commercial-popup">
              <div className="modal-container">
                {/* <form onSubmit={handleSubmit}>
                  <div className="modal-header justify-content-between">
                    <span></span>
                    <h2>
                      FranAbility<sup>SM</sup>
                    </h2>
                    <button
                      className="close-btn-popup"
                      onClick={() => setIsOpen(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="modal-body">
                    <p className="modal-subheading">
                      <strong>Find a franchise within your budget.</strong>
                    </p>
                    <div>
                      <p className="modal-text">
                        See a real-time view of what franchises you can afford
                        in today’s market.
                      </p>

                      <div className="form-group">
                        <label>
                          Where do you plan to own or operate your franchise?{" "}
                          <span className="required">*</span>
                        </label>
                        <select
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleChange}
                        >
                          <option value="">Select State</option>
                          {usStates.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
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
                            name="investmentCapital"
                            value={formData.investmentCapital}
                            onChange={handleChange}
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
                            name="monthlyIncome"
                            value={formData.monthlyIncome}
                            onChange={handleChange}
                            className="centered-input"
                            placeholder="Enter your target monthly income"
                          />
                        </div>
                        <small>
                          We'll match you with franchises whose financial
                          profiles align with your goals.
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
                            name="annualIncome"
                            value={formData.annualIncome}
                            onChange={handleChange}
                            className="centered-input"
                            placeholder="Enter annual income"
                          />
                          <span className="suffix">/year</span>
                        </div>
                        <small>
                          We'll match you with franchises whose financial
                          profiles align with your goals.
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
                            name="monthlyDebt"
                            value={formData.monthlyDebt}
                            onChange={handleChange}
                            className="centered-input"
                            placeholder="Enter minimum monthly debt payments"
                          />
                          <span className="suffix">/year</span>
                        </div>
                        <small>
                          This includes minimum payments for credit cards,
                          student loans, car loans, alimony, or child support.
                        </small>
                      </div>

                      <div className="form-group">
                        <label>
                          What is your credit score?{" "}
                          <span className="required">*</span>
                        </label>
                        <select
                          name="creditScore"
                          value={formData.creditScore}
                          onChange={handleChange}
                        >
                          <option value="">Select a range:</option>
                          <option value="FL">740+ Excellent</option>
                          <option value="CA">700–739 Good</option>
                          <option value="NY">640–699 Fair</option>
                          <option value="NY">
                            Below 640 Needs Improvement
                          </option>
                          <option value="NY">Not Sure</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button className="submit-btn">
                      See what you can afford
                    </button>
                  </div>
                </form> */}

                <form
                  className="p-4 commercial-popup-form row"
                  onSubmit={handleSubmit}
                >
                  <div className="modal-header justify-content-between">
                    <span></span>
                    <h2>
                      FranAbility<sup>SM</sup>
                    </h2>
                    <button
                      className="close-btn-popup"
                      onClick={() => setIsOpen(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="my-4 d-flex justify-content-center">
                    <img src={PopupImage} alt="PopupImage" />
                  </div>
                  <div className=" mb-3 col-md-6">
                    <label className="label-heading">First Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter First Name"
                      value={formData.firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="label-heading">Last Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Last Name"
                      value={formData.lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="label-heading">Phone Number:</label>
                    <InputMask
                      mask="(999) 999-9999"
                      replacement={{ 9: /\d/ }}
                      className="form-control"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="label-heading">Email Address:</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="label-heading">
                      What type of franchises are you interested in:
                    </label>
                    <select
                      className="form-control"
                      value={formData.franchiseType}
                      onChange={(e) => setFranchiseType(e.target.value)}
                      required
                    >
                      <option value="">Select a franchise type</option>
                      <option value="food">Food & Beverage</option>
                      <option value="retail">Retail</option>
                      <option value="fitness">Fitness</option>
                      <option value="education">Education</option>
                      <option value="services">Services</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="label-heading">Cash on Hand</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Cash on Hand"
                      value={formData.cashOnHand}
                      onChange={(e) => setCashOnHand(e.target.value)}
                      min="0"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="label-heading">Total Assets</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Total Assets"
                      value={formData.totalAssets}
                      onChange={(e) => setTotalAssets(e.target.value)}
                      min="0"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="label-heading">Monthly Debt</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Monthly Debt"
                      value={formData.monthlyDebt}
                      onChange={(e) => setMonthlyDebt(e.target.value)}
                      min="0"
                    />
                  </div>

                  <label className="label-heading">Desired Territory</label>

                  {/* Country */}
                  <div className="mb-3 request-form-select">
                    {/* <input
                    type="text"
                    placeholder="Search Country"
                    value={searchCountry}
                    onChange={(e) => setSearchCountry(e.target.value)}
                    className="form-control mb-2"
                  /> */}
                    <select
                      className="form-select"
                      value={formData.selectedCountry}
                      onChange={(e) => {
                        setSelectedCountry(e.target.value);
                        fetchStates(e.target.value);
                      }}
                      required
                    >
                      <option value="">Select Country</option>
                      {countries
                        .filter((c) =>
                          c.name
                            .toLowerCase()
                            .includes(searchCountry.toLowerCase())
                        )
                        .map((c) => (
                          <option key={c.iso2} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* State */}
                  {selectedCountry && (
                    <div className="mb-3 request-form-select">
                      {/* <input
                      type="text"
                      placeholder="Search State"
                      value={searchState}
                      onChange={(e) => setSearchState(e.target.value)}
                      className="form-control mb-2"
                    /> */}
                      <select
                        className="form-select"
                        value={formData.selectedState}
                        onChange={(e) => {
                          setSelectedState(e.target.value);
                          fetchCities(selectedCountry, e.target.value);
                        }}
                        required
                      >
                        <option value="">Select State</option>
                        {states
                          .filter((s) =>
                            s.name
                              .toLowerCase()
                              .includes(searchState.toLowerCase())
                          )
                          .map((s) => (
                            <option key={s.name} value={s.name}>
                              {s.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  )}

                  {/* City */}
                  {selectedState && (
                    <div className="mb-3 request-form-select">
                      {/* <input
                      type="text"
                      placeholder="Search City"
                      value={searchCity}
                      onChange={(e) => setSearchCity(e.target.value)}
                      className="form-control mb-2"
                    /> */}
                      <select
                        className="form-select"
                        required
                        value={formData.selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                      >
                        <option value="">Select City</option>
                        {cities
                          .filter((city) =>
                            city
                              .toLowerCase()
                              .includes(searchCity.toLowerCase())
                          )
                          .map((city, i) => (
                            <option key={i} value={city}>
                              {city}
                            </option>
                          ))}
                      </select>
                    </div>
                  )}

                  {/* <div className="form-check mb-3 d-flex align-items-center gap-10">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                    />
                    <label className="form-check-label fs-14" htmlFor="consent">
                      I consent to receive information about franchise
                      opportunities via email and SMS.
                    </label>
                  </div> */}
                  <div className="modal-footer">
                    <button className="submit-btn">
                      See what you can afford
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Scrollable Cards */}
          <div
            className="slider-container commercialSlider-container commercial-slider-section"
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
                      <p className="label-badge">Within FranAbility℠</p>
                    </div>
                    <div className="px-4 py-2">
                      {/* Content Section */}
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="commfranchise-name ">
                          {franchise.name}
                        </h5>
                        <i class="bi bi-suit-heart"></i>
                      </div>

                      {/* Stats Section */}
                      <div className="card-stats ">
                        <table className="table franchise-meta table-borderless mb-0">
                          <tbody>
                            <tr>
                              <td className="text-start align-middle p-0">
                                <span className="d-inline-flex align-items-center sites-stats">
                                  {franchise.code}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-start align-middle p-0">
                                <span className="d-inline-flex align-items-center sites-stats">
                                  {franchise.code}
                                </span>
                              </td>
                            </tr>
                            {/* <tr>
                              <td>
                                <span className="unique_code">
                                  FLS ID #CRE{franchise.code}
                                </span>
                              </td>
                            </tr> */}
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
