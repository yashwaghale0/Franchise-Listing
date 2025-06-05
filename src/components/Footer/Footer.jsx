import { useState } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";
import { FaAngleRight } from "react-icons/fa6";

const Footer = () => {
  const [open, setOpen] = useState(null);

  const toggleSection = (index) => {
    setOpen(open === index ? null : index);
  };

  const sections = [
    {
      title: "Search",
      links: [
        "Franchise Opportunities",
        "Franchise Resales",
        "Commercial Real Estate",
        "Find Franchise Service Pros",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Contact Us",
        "F.A.Q.s",
        "Terms of Use",
        "Privacy Policy",
        "Site Map",
      ],
    },
    {
      title: "Join Our Network",
      links: [
        "Franchisors",
        "Franchisees",
        "Commercial Real Estate Agents",
        "Brokers ›",
        "Attorneys ›",
        "Franchise Service Pros ›",
      ],
    },
    {
      title: "Resources",
      links: [
        "Get Listed",
        "Sell Your Franchise",
        "Franchise Events",
        "Franchise News",
        "Franchise Buyers Guide",
      ],
    },
  ];

  return (
    <>
      <div className="footer-gradient-bar"></div>
      <footer className="footer-container">
        <div className="footer-content">
          {/* Desktop layout */}
          <div className="footer-desktop">
            <div className="footer-logo-section">
              <h2 className="footer-logo">franchiselistings.com</h2>
              <div className="social-icons">
                <a href="#">
                  <FaLinkedinIn />
                </a>
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div className="footer-links">
              {sections.map((sec, i) => (
                <div className="footer-column" key={i}>
                  <h5>{sec.title}</h5>
                  {sec.links.map((link, j) => (
                    <a href="#" key={j}>
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile layout */}
          <div className="footer-mobile">
            {sections.map((sec, i) => (
              <div className="footer-mobile-section" key={i}>
                <div
                  className="footer-mobile-header"
                  onClick={() => toggleSection(i)}
                >
                  {sec.title}
                  <span>{open === i ? "−" : <FaAngleRight />}</span>
                </div>
                {open === i && (
                  <div className="footer-mobile-links">
                    {sec.links.map((link, j) => (
                      <a href="#" key={j}>
                        {link}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="footer-logo-center">
              {/* <img src="/path-to-your-logo.svg" alt="Footer Logo" /> */}
              <h4 className="py-3">franchiselistings</h4>
              <div className="social-icons">
                <a href="#">
                  <FaLinkedinIn />
                </a>
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <p className="copyright py-4">
              Franchise Listings, LLC 2025 © All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
