import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsThreeDots } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { AiOutlineFlag } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import { GrLocationPin } from "react-icons/gr";
import { MdOutlineLocationCity } from "react-icons/md";
import t1 from "../../assets/images/review1.png";
import t2 from "../../assets/images/review2.png";
import t3 from "../../assets/images/review3.png";
import "./SearchResults.css";
import { BACKEND_URL } from "../../../env.js";
import Chat from "../../assets/images/chat.svg";
import { IoArrowBack, IoSearch } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import Breadcrumbs from "./Breadcrumbs.jsx";
import { InputMask } from "@react-input/mask";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonials = [
  { name: "Michael Robert", img: t1 },
  { name: "Jennifer Aniston", img: t2 },
  { name: "Julia Willians", img: t3 },
];

const FranchiseDetail = () => {
  const { id } = useParams();
  const [franchise, setFranchise] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Location selector states
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchState, setSearchState] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [showMobileForm, setShowMobileForm] = useState(false);

  // Fetch franchise details
  useEffect(() => {
    const fetchFranchise = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/opportunities/${id}`);
        setFranchise(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Failed to fetch franchise:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFranchise();
  }, [id]);

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

  if (loading) return <p className="text-center">Loading...</p>;
  if (!franchise) return <p className="text-center">Franchise not found.</p>;

  return (
    <>
      <div className="container py-4 listingdetail-container">
        {/* Banner Section */}
        <div className="position-relative mb-4 mt-3 listing-image-section">
          <img
            src={franchise.brandBanner}
            alt={franchise.brandName}
            className="w-100 banner-image"
            style={{
              maxHeight: "300px",
              objectFit: "cover",
              borderRadius: "12px !important",
            }}
          />
          <div className="d-flex align-items-center justify-content-between mainlogo-wrapper">
            <div className="d-flex align-items-center gap-3 mt-3 franchise-details-image">
              <div className="gradient-wrapper">
                <img
                  src={franchise.brandLogo || "/placeholder.jpg"}
                  alt="Logo"
                  className=" Listing-main-logo"
                />
                <div className="banner-top-icons d-flex justify-content-between px-3 py-2">
                  <button
                    className="icon-btn"
                    onClick={() => navigate("/franchise-Opportunities")}
                  >
                    <IoArrowBack size={28} color="#fff" />
                  </button>
                  <button
                    className="icon-btn"
                    onClick={() => navigate("/franchise-opportunities")}
                  >
                    <IoSearch size={28} color="#fff" />
                  </button>
                </div>
              </div>
              <div>
                <h2 className="brandname">{franchise.brandName}</h2>
                <div className="d-flex gap-2 mt-3">
                  <button className="franchise-category">
                    {franchise.category}
                  </button>
                </div>
              </div>
              <div>
                <h2 className="mb-0">{franchise.title}</h2>
                <div className="d-flex gap-2 mt-1">
                  {franchise.industryCategory && (
                    <span className="badge bg-light text-dark border">
                      {franchise.description}
                    </span>
                  )}
                  {franchise.subCategory && (
                    <span className="badge bg-light text-dark border">
                      {franchise.description}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex gap-3 mt-3 franchise-folloers">
                <span>
                  <strong>1.5M</strong> Franchisees
                </span>
                <span>
                  <strong>10k</strong> Likes
                </span>
              </div>
              <div className="d-flex gap-2 mt-3 franchise-socials-buttons">
                <button className="btn btn-success btn-sm bg-gradients like-btn">
                  <span>
                    <FaPlusCircle />
                  </span>{" "}
                  Like
                </button>
                <button className=" btn-primary btn-sm message-gradients like-btn">
                  <span>
                    <img src={Chat} alt="chat Message" />
                  </span>{" "}
                  Message
                </button>
                <button className=" btn-secondary btn-sm links-gradients like-btn">
                  Links
                </button>
                <button className="btn btn-outline-secondary btn-sm links-gradients">
                  <BsThreeDots />
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <Breadcrumbs />

        <div className="row mt-4 p-3 ">
          {/* Left Content */}
          <div className="col-lg-8 left-sidebar-content">
            {/* Tabs */}
            <div className="d-flex gap-3 mb-4 button-tabs">
              <a href="#about">
                <button className="btn franchise-details-tabs active">
                  About
                </button>
              </a>
              <a href="#investment">
                <button className="btn franchise-details-tabs">
                  Investment
                </button>
              </a>
              <a href="#operations">
                <button className="btn franchise-details-tabs">
                  Operations
                </button>
              </a>
              <a href="#training">
                <button className="btn franchise-details-tabs">
                  Training & Support
                </button>
              </a>
              <a href="#territory">
                <button className="btn franchise-details-tabs">
                  Territory & Growth
                </button>
              </a>
              <a href="#media">
                <button className="btn franchise-details-tabs">
                  Media & Press
                </button>
              </a>
            </div>

            {/* Tab 1: About */}
            <div id="about">
              <h4 className="franchise-about-head">
                About {franchise.brandName} Franchise
              </h4>
              <p className="franchise-deatils-description w-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet felis non nisl sodales cursus...
              </p>

              {/* Company Overview */}
              <div className="w-75 mt-4">
                <h5 className="franchise-about-head">Company Overview</h5>
                <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                  <span className="d-flex gap-10 align-items-center">
                    <AiOutlineFlag size={20} />
                    <p className="franchise-about-label">Founded</p>
                  </span>
                  <span className="franchise-about-stats">2005</span>
                </div>
                <div className="d-flex justify-content-between mb-4 py-3 border-bottom">
                  <span className="d-flex gap-10 align-items-center">
                    <CiShop size={20} />
                    <p className="franchise-about-label">Franchising Since</p>
                  </span>
                  <span className="franchise-about-stats">2010</span>
                </div>
              </div>

              {/* Location Overview */}
              <div className="w-75">
                <h5 className="franchise-about-head">Location & Scale</h5>
                <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                  <span className="d-flex gap-10 align-items-center">
                    <GrLocationPin size={20} />
                    <p className="franchise-about-label">Headquarters</p>
                  </span>
                  <span className="franchise-about-stats">New York, USA</span>
                </div>
                <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                  <span className="d-flex gap-10 align-items-center">
                    <MdOutlineLocationCity size={20} />
                    <p className="franchise-about-label">Corporate Locations</p>
                  </span>
                  <span className="franchise-about-stats">15</span>
                </div>
                <div className="d-flex justify-content-between mb-4 py-3 border-bottom">
                  <span className="d-flex gap-10 align-items-center">
                    <CiShop size={20} />
                    <strong>Franchise Locations</strong>
                  </span>
                  <span className="franchise-about-stats">120</span>
                </div>
              </div>

              {/* Franchise Video */}
              <div className="mt-4">
                <h5 className="franchise-about-head">
                  Franchise Marketing Video
                </h5>
                <div
                  className="video-placeholder"
                  style={{ height: "200px", background: "#ddd" }}
                ></div>
              </div>

              {/* Testimonial Videos */}
              <div className="mt-4">
                <h5 className="franchise-about-head">
                  Franchisee Testimonial Videos
                </h5>
                <div
                  className="video-placeholder"
                  style={{ height: "200px", background: "#ddd" }}
                ></div>
              </div>
            </div>

            {/* Tab 2: Investment */}
            <div id="investment" className="mt-5 w-75">
              <h4 className="franchise-about-head">Investment Overview</h4>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="franchise-about-label">
                  Total Investment Range
                </span>
                <span className="franchise-about-stats">
                  $100,000 - $200,000
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="franchise-about-label">
                  Initial Franchise Fee
                </span>
                <span className="franchise-about-stats">$35,000</span>
              </div>
              <div className="d-flex justify-content-between mb-4 py-3 border-bottom">
                <span className="franchise-about-label">
                  Financing Available
                </span>
                <span className="franchise-about-stats">Yes, Third Party</span>
              </div>

              <h5 className="mt-4 franchise-about-head">Ongoing Fees</h5>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="franchise-about-label">Royalty Fee</span>
                <span className="franchise-about-stats">
                  6% of Gross Revenue
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="franchise-about-label">Local Advertising</span>
                <span className="franchise-about-stats">
                  1% of Gross Revenue
                </span>
              </div>
              <div className="d-flex justify-content-between mb-4 py-3 border-bottom">
                <span className="franchise-about-label">
                  National Advertising
                </span>
                <span className="franchise-about-stats">
                  1% of Gross Revenue
                </span>
              </div>

              <h5 className="mt-4 franchise-about-head">
                Financial Performance
              </h5>
              <div className="d-flex justify-content-between mb-4 py-3 border-bottom">
                <span className="franchise-about-label">
                  Item 19 Disclosure
                </span>
                <span className="franchise-about-stats">
                  Yes (Available upon request)
                </span>
              </div>
              <button className="btn request-investment">
                Request Investment Summary
              </button>
            </div>

            {/* Tab 3: Operations */}
            <div id="operations" className="mt-5 w-75">
              <h4 className="franchise-about-head">Operations</h4>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="franchise-about-label">
                  Preferred Locations
                </span>
                <span className="franchise-about-stats">
                  Commercial centers, strip centers, malls
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="franchise-about-label">
                  Space Requirements
                </span>
                <span className="franchise-about-stats">700 - 1,500 sq ft</span>
              </div>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="franchise-about-label"># of Employees</span>
                <span className="franchise-about-stats">5-10</span>
              </div>
              <div className="d-flex justify-content-between mb-4 py-3 border-bottom">
                <span className="franchise-about-label">Business Hours</span>
                <span className="franchise-about-stats">
                  Mon-Sat 11am-8pm, Closed Sun
                </span>
              </div>
            </div>

            {/* Tab 4: Training & Support */}
            <div id="training" className="mt-5 w-75">
              <h4 className="franchise-about-head">Initial Training Program</h4>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="franchise-about-label">
                  Classroom Training
                </span>
                <span className="franchise-about-stats">44 hours</span>
              </div>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="franchise-about-label">
                  On-the-Job Training
                </span>
                <span className="franchise-about-stats">6 hours</span>
              </div>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="franchise-about-label">Training Location</span>
                <span className="franchise-about-stats">
                  HQ & Your Location
                </span>
              </div>
              <div className="d-flex justify-content-between mb-4 py-3 border-bottom">
                <span className="franchise-about-label">
                  Grand Opening Support
                </span>
                <span className="franchise-about-stats">Yes</span>
              </div>

              <h5 className="mt-4 franchise-about-head">Ongoing Support</h5>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="franchise-about-label">
                  Operations Support
                </span>
                <span className="franchise-about-stats">Yes</span>
              </div>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="franchise-about-label">Marketing Support</span>
                <span className="franchise-about-stats">Yes</span>
              </div>
              <div className="d-flex justify-content-between mb-4 py-3 border-bottom">
                <span className="franchise-about-label">
                  Technology Support
                </span>
                <span className="franchise-about-stats">Yes</span>
              </div>

              <h5 className="mt-4 franchise-about-head">
                Marketing & Advertising
              </h5>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="franchise-about-label">
                  Marketing Materials
                </span>
                <span className="franchise-about-stats">Yes</span>
              </div>
              <div className="d-flex justify-content-between mb-4 py-3 border-bottom">
                <span className="franchise-about-label">
                  Digital Marketing Support
                </span>
                <span className="franchise-about-stats">Yes</span>
              </div>
            </div>

            {/* Tab 5: Territory & Growth */}
            <div id="territory" className="mt-5 w-75">
              <h4 className="franchise-about-head">Territory & Growth</h4>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="franchise-about-label">
                  Territory Description
                </span>
                <span className="franchise-about-stats">
                  Protected territory (1-mile radius)
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="franchise-about-label">
                  Single Unit Franchises
                </span>
                <span className="franchise-about-stats">Available</span>
              </div>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="franchise-about-label">
                  Multi-Unit Development
                </span>
                <span className="franchise-about-stats">Available</span>
              </div>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="franchise-about-label">Master Franchise</span>
                <span className="franchise-about-stats">
                  Contact for availability
                </span>
              </div>
              <div className="d-flex justify-content-between mb-4 py-3 border-bottom">
                <span className="franchise-about-label">
                  International Expansion
                </span>
                <span className="franchise-about-stats">
                  Contact for availability
                </span>
              </div>
            </div>

            {/* Tab 6: Media & Press */}
            <div id="media" className="mt-5 w-75">
              <h4 className="franchise-about-head">Press Coverage</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

              <h5 className="mt-4 franchise-about-head">Gallery</h5>
              <Slider
                dots
                infinite
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                arrows={false}
                autoplay
                autoplaySpeed={3000}
                className="Image-Slider"
              >
                {[
                  franchise.brandBanner,
                  franchise.brandBanner,
                  franchise.brandBanner,
                ].map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Testimonials */}
            <div className="w-75">
              <h5 className="mt-4 franchise-about-head">
                Franchise Testimonials
              </h5>
              {testimonials.map((t, i) => (
                <div className="d-flex mb-4 py-4 border-bottom" key={i}>
                  <img
                    src={t.img}
                    alt={t.name}
                    className="rounded-circle me-3"
                    style={{ width: "120px", height: "120px" }}
                  />
                  <div>
                    <strong>{t.name}</strong>
                    <p className="text-muted mb-1">Dallas, TX</p>
                    <p className="mb-0">
                      “Lorem ipsum dolor sit amet. Non illum tenetur ut
                      explicabo...”
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-4 right-sidebar-form mobile-right-sidebar">
            <div
              className="bg-white pt-0 rounded shadow-sm border franchise-details-sidebar sticky-sidebar"
              id="request-info"
            >
              <h5 className="text-white details-form-heading p-4 rounded">
                Request Franchise Information
              </h5>
              <form className="p-4 franchise-details-form">
                <div className="mb-3">
                  <label className="label-heading">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter First Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="label-heading">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Last Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="label-heading">Phone Number</label>
                  <InputMask
                    mask="(999) 999-9999"
                    replacement={{ 9: /\d/ }}
                    className="form-control"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="label-heading">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email Address"
                    required
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
                    value={selectedCountry}
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
                      value={selectedState}
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
                    <select className="form-select" required>
                      <option value="">Select City</option>
                      {cities
                        .filter((city) =>
                          city.toLowerCase().includes(searchCity.toLowerCase())
                        )
                        .map((city, i) => (
                          <option key={i} value={city}>
                            {city}
                          </option>
                        ))}
                    </select>
                  </div>
                )}

                <div className="form-check mb-3 d-flex align-items-center gap-10">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="consent"
                  />
                  <label className="form-check-label fs-14" htmlFor="consent">
                    I consent to receive information about franchise
                    opportunities via email and SMS.
                  </label>
                </div>
                <button className="btn send-request-btn w-100" type="submit">
                  Send Request
                </button>
              </form>
            </div>
          </div>

          {showMobileForm && (
            <div className="mobile-form-modal">
              <div
                className="mobile-form-backdrop"
                onClick={() => setShowMobileForm(false)}
              ></div>
              <div className="mobile-form-container">
                <button
                  className="btn btn-sm btn-danger close-btn"
                  onClick={() => setShowMobileForm(false)}
                >
                  <IoCloseOutline />
                </button>
                <h5 className="text-white details-form-heading p-3 rounded">
                  Request Franchise Information
                </h5>
                <form className="p-4 franchise-details-form">
                  <div className="mb-3">
                    <label className="label-heading">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter First Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="label-heading">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Last Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="label-heading">Phone Number</label>
                    <InputMask
                      mask="(999) 999-9999"
                      replacement={{ 9: /\d/ }}
                      className="form-control"
                      placeholder="(123) 456-7890"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="label-heading">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email Address"
                      required
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
                      value={selectedCountry}
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
                        value={selectedState}
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
                      <select className="form-select" required>
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

                  <div className="form-check mb-3 d-flex align-items-center gap-10">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="consent"
                    />
                    <label className="form-check-label fs-14" htmlFor="consent">
                      I consent to receive information about franchise
                      opportunities via email and SMS.
                    </label>
                  </div>
                  <button className="btn send-request-btn w-100" type="submit">
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        <div className="sticky-bottom-bar">
          <a
            href="https://dev.franchiselistings.com/admin/login?tab=signup"
            className="btn contact-btn"
          >
            Contact
          </a>
          <button
            className="btn request-btn d-block d-lg-none"
            onClick={() => setShowMobileForm(true)}
          >
            Request Info
          </button>
        </div>
      </div>
    </>
  );
};

export default FranchiseDetail;
