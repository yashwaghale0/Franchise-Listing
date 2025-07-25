import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import TempFooter from "../Footer/TempFooter";
import { BsThreeDots } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { PiChatsCircle } from "react-icons/pi";
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

const testimonials = [
  { name: "Michael Robert", img: t1 },
  { name: "Jennifer Aniston", img: t2 },
  { name: "Julia Willians", img: t3 },
];

const FranchiseDetail = () => {
  const { id } = useParams();
  const [franchise, setFranchise] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFranchise = async () => {
      try {
        // const res = await axios.get(
        //   `https://dev.franchiselistings.com/franchise_backend/api/opportunities/${id}`
        // );
        const res = await axios.get(`${BACKEND_URL}/api/opportunities/${id}`);
        console.log(res.data);
        setFranchise(res.data);
      } catch (error) {
        console.error("Failed to fetch franchise:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFranchise();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!franchise) return <p className="text-center">Franchise not found.</p>;

  return (
    <>
      {/* <Header /> */}
      <div className="container py-4">
        {/* Banner Section */}
        <div className="position-relative mb-4 mt-3">
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
              <div className=".gradient-wrapper">
                <img
                  src={franchise.brandLogo || "/placeholder.jpg"}
                  alt="Logo"
                  className=" Listing-main-logo"
                />
              </div>
              <div>
                <h2 className="brandname">{franchise.brandName}</h2>
                <div className="d-flex gap-2 mt-3">
                  <button className="franchise-category">
                    {franchise.category}
                  </button>
                  {/* <button>test 2</button> */}
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

            <div className="">
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
                  {" "}
                  <span>
                    <FaPlusCircle />
                  </span>{" "}
                  Like
                </button>
                <button className=" btn-primary btn-sm message-gradients like-btn">
                  {" "}
                  <span>
                    {/* <PiChatsCircle /> */}
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
        <hr className="" />
        <div className="row mt-4">
          {/* Left Content */}
          <div className="col-lg-8 left-sidebar-content">
            {/* Tabs */}
            <div className="d-flex gap-3 mb-4 button-tabs">
              <a href="#about">
                <button className="btn franchise-details-tabs active">
                  About
                </button>
              </a>
              <a href="#overview">
                <button className="btn franchise-details-tabs">
                  Investment
                </button>
              </a>
              <a href="#Training">
                <button className="btn franchise-details-tabs">Training</button>
              </a>
              <button className="btn franchise-details-tabs">Gallery</button>
            </div>

            {/* About Section */}
            <h4 className="franchise-about-head">
              About {franchise.brandName} Franchise
            </h4>
            <p className="franchise-deatils-description w-75" id="about">
              {franchise.aboutUs}
            </p>

            {/* Company Overview */}
            <div className="w-75">
              <h5 className="mt-4 franchise-about-head" id="overview">
                Company Overview
              </h5>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="d-flex gap-10 align-items-center ">
                  <AiOutlineFlag size={20} />
                  <p className="franchise-about-label">Founded</p>
                </span>
                <span className="franchise-about-stats">
                  {new Date(franchise.foundedDate).getFullYear()}
                </span>
              </div>
              <div className="d-flex justify-content-between mb-4 py-3 border-bottom">
                <span className="d-flex gap-10 align-items-center ">
                  <CiShop size={20} />
                  <p className="franchise-about-label">Franchising</p>
                </span>
                <span className="franchise-about-stats">
                  {new Date(franchise.franchisingSince).getFullYear()}
                </span>
              </div>
            </div>

            {/* Location & Scale */}
            <div className="w-75">
              <h5 className="franchise-about-head">Location & Scale</h5>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="d-flex gap-10 align-items-center ">
                  <GrLocationPin size={20} />
                  <p className="franchise-about-label">Headquarters</p>
                </span>
                <span className="franchise-about-stats">
                  {franchise.headquarter || "N/A"}
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2 py-3 border-bottom">
                <span className="d-flex gap-10 align-items-center ">
                  <MdOutlineLocationCity size={20} />
                  <p className="franchise-about-label">Corporate Locations</p>
                </span>
                <span className="franchise-about-stats">
                  {franchise.corporateLocations || "N/A"}
                </span>
              </div>
              <div className="d-flex justify-content-between mb-4 py-3 border-bottom">
                <span className="d-flex gap-10 align-items-center ">
                  <CiShop size={20} />
                  <strong>Franchise Units</strong>
                </span>
                <span className="franchise-about-stats">
                  {franchise.franchiseLocations || "N/A"}
                </span>
              </div>
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
          <div className="col-lg-4 ">
            <div
              className="bg-white  pt-0 rounded shadow-sm border franchise-details-sidebar sticky-sidebar"
              id="request-info"
            >
              <h5 className="text-white details-form-heading p-4 rounded">
                Request Franchise Information
              </h5>
              <form className="p-4 franchise-details-form">
                <div className="mb-3">
                  <label htmlFor="First Name" className="label-heading">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter First Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Last Name" className="label-heading">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Last Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="label-heading" htmlFor=" phone number">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="label-heading">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email Address"
                    required
                  />
                </div>
                <label htmlFor="Desired Territory" className="label-heading">
                  Desired Territory
                </label>
                <div className="mb-3 request-form-select">
                  <select className="form-select" required>
                    <option>United States</option>
                  </select>
                </div>
                <div className="mb-3 request-form-select">
                  <select className="form-select" required>
                    <option>Select State</option>
                  </select>
                </div>
                <div className="mb-3 request-form-select">
                  <select className="form-select" required>
                    <option>Select City</option>
                  </select>
                </div>
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
        </div>
        <div class="sticky-bottom-bar">
          <a
            href="https://dev.franchiselistings.com/franchise_admin/login?tab=signup"
            class="btn contact-btn"
          >
            Contact
          </a>
          <a href="#request-info" class="btn request-btn">
            Request Info
          </a>
        </div>
      </div>
      {/* <TempFooter /> */}
    </>
  );
};

export default FranchiseDetail;
