import "./Header.css";
import { useNavigate } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { PiSignInLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import logo from "../../assets/images/fl-logo.svg";
import mobileLogo from "../../assets/images/mobile-logo.svg";
import LoginModal from "./LoginModel";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/franchise-listing/sign-in");
  };

  return (
    <>
      <div className="header-container d-flex justify-content-between align-items-center  position-relative">
        <div className="d-flex justify-content-between align-items-center header_section">
          <span className="Mobile-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <BsList />
          </span>
          <img src={logo} alt="Main Header Logo" className="main-Logo" />
          <img
            src={mobileLogo}
            alt="Main Header Logo"
            className="mobile-logo"
          />

          <div className="d-flex gap-10">
            <button
              className="btn d-flex align-items-center gap-2 sign_in"
              onClick={handleSignIn}
            >
              <PiSignInLight />
              Sign In
            </button>
            <LoginModal isOpen={open} onClose={() => setOpen(false)} />
            <button
              className="btn d-flex align-items-center gap-2 create_account"
              onClick={handleSignIn}
            >
              <CiUser />
              Create Account
            </button>
          </div>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="dropdown-mega-menu mega-menu">
            <div className="row px-5 py-5">
              <div className="col">
                <h6>Buy a Franchise</h6>
                <a href="#">Franchise Opportunities</a>
                <a href="#">Franchise Resales</a>

                <h6 className="mt-5">Sell a Franchise</h6>
                <a href="#">List my Franchise</a>

                <h6 className="mt-5">Find a Broker</h6>
                <a href="#">Franchise Broker</a>
                <a href="#">Business Broker</a>
                <a href="#">Commercial Real Estate Broker</a>
              </div>

              <div className="col">
                <h6>Site Selection</h6>
                <a href="#">Commercial Real Estate Listings</a>

                <h6 className="mt-5">Find a Franchise Service Pro</h6>
                <a href="#">Franchise Attorney</a>
                <a href="#">Immigration Attorney</a>
                <a href="#">Other Franchise Service Pros</a>
              </div>

              <div className="col">
                <h6>Get Franchise Funding</h6>
                <a href="#">Apply Now</a>

                <h6 className="mt-5">Join Our Network</h6>
                <a href="#">Franchisors</a>
                <a href="#">Franchisees</a>
                <a href="#">Commercial Real Estate Agents</a>
                <a href="#">Franchise Brokers</a>
                <a href="#">Franchise Attorney</a>
                <a href="#">Immigration Attorney</a>
                <a href="#">Other Franchise Service Pros</a>
              </div>

              <div className="col">
                <h6>Learn More</h6>
                <a href="#">Franchise Events</a>
                <a href="#">Franchise News</a>
                <a href="#">Get Listed</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
