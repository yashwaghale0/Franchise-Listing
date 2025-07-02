import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";
import { FaAngleRight } from "react-icons/fa6";
import logo from "../../assets/images/fl-logo.svg";
import footer from "../../assets/images/footer.svg";

const Footer = () => {
  const [open, setOpen] = useState(null);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleSection = (index) => {
    setOpen(open === index ? null : index);
  };

  const toggleSubmenu = (title) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const getLinkPath = (text) => {
    const routes = {
      "Franchise Opportunities": "Franchise-Listing/franchise-opportunities",
    };
    return routes[text] || "#";
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
        {
          title: "Brokers ›",
          submenu: ["Franchise Broker", "Business Broker"],
        },
        {
          title: "Attorneys ›",
          submenu: ["Franchise Attorney", "Immigration Attorney"],
        },
        {
          title: "Franchise Service Pros ›",
          submenu: ["Marketing Experts", "Consultants", "Software Vendors"],
        },
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
              <img src={logo} alt="Main Header Logo" className="main-Logo" />

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
                  {sec.links.map((link, j) => {
                    if (typeof link === "string") {
                      return (
                        <Link to={getLinkPath(link)} key={j}>
                          {link}
                        </Link>
                      );
                    } else {
                      return (
                        <div key={j}>
                          <div
                            className="submenu-toggle"
                            onClick={() => toggleSubmenu(link.title)}
                            style={{ cursor: "pointer" }}
                          >
                            <span>{link.title}</span>
                          </div>
                          {submenuOpen[link.title] && (
                            <div className="submenu">
                              {link.submenu.map((sublink, k) => (
                                <a
                                  href="#"
                                  key={k}
                                  onClick={(e) => e.preventDefault()}
                                >
                                  {sublink}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }
                  })}
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
                    {sec.links.map((link, j) => {
                      if (typeof link === "string") {
                        return (
                          <a
                            href="#"
                            key={j}
                            onClick={(e) => e.preventDefault()}
                          >
                            {link}
                          </a>
                        );
                      } else {
                        return (
                          <div key={j}>
                            <div
                              className="submenu-toggle"
                              onClick={() => toggleSubmenu(link.title)}
                              style={{ cursor: "pointer" }}
                            >
                              <span>{link.title}</span>
                            </div>
                            {submenuOpen[link.title] && (
                              <div className="submenu">
                                {link.submenu.map((sublink, k) => (
                                  <a
                                    href="#"
                                    key={k}
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    {sublink}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            ))}

            <div className="footer-logo-center">
              <img
                src={footer}
                alt="Main Header Logo"
                className="mobile-logo"
              />
              <div className="social-icons ">
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
          <p className="desktop-copyright mb-0">
            Franchise Listings, LLC 2025 © All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
