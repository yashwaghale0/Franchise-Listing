import React from "react";
import { Link } from "react-router-dom";
import TempHeader from "../Header/TempHeader";
import TempFooter from "../Footer/TempFooter";
import "./policy.css";

const SiteMap = () => {
  return (
    <>
     <TempHeader />
    <div className="container py-5 policy-section">
      <h1>Site Map</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/franchise-opportunities">Franchise Opportunities</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/terms-of-use">Terms of Use</Link>
        </li>
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
      </ul>
    </div>
    <TempFooter />
    </>
  );
};

export default SiteMap;
