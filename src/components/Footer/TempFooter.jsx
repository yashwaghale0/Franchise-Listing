import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
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
      "Franchise Opportunities": "/franchise-opportunities",
      "Terms of Use": "/terms-of-use",
      "Privacy Policy": "/privacy-policy",
      "Site Map": "/site-map",
      Franchisors: "https://dev.franchiselistings.com/admin/login?tab=signup",
      "Get Listed": "https://dev.franchiselistings.com/admin/login?tab=signup",
    };
    return routes[text] || "#";
  };

  const isExternalLink = (url) => url.startsWith("http");

  const sections = [
    {
      title: "Search",
      links: ["Franchise Opportunities"],
    },
    {
      title: "Company",
      links: ["Terms of Use", "Privacy Policy", "Site Map"],
    },
    {
      title: "Join Our Network",
      links: ["Franchisors"],
    },
    {
      title: "Resources",
      links: ["Get Listed", "Franchise Buyers Guide"],
    },
  ];

  return (
    <>
      <div className="mainfooter-container">
        <div className="footer-gradient-bar"></div>
        <footer className="footer-container">
          <div className="footer-content">
            {/* Desktop layout */}
            <div className="footer-desktop">
              <div className="footer-logo-section">
                <img
                  src={logo}
                  alt="Main Header Logo"
                  className="footer-main-Logo"
                />
                <div className="social-icons">
                  <a
                    href="https://www.linkedin.com/company/franchiselistings/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.facebook.com/franchiselistings"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/franchiselistings"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.youtube.com/@franchiselistings"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>

              <div className="footer-links">
                {sections.map((sec, i) => (
                  <div className="footer-column" key={i}>
                    <h5>{sec.title}</h5>
                    {sec.links.map((link, j) => {
                      const path = getLinkPath(link);
                      return isExternalLink(path) ? (
                        <a
                          href={path}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={j}
                        >
                          {link}
                        </a>
                      ) : (
                        <Link to={path} key={j}>
                          {link}
                        </Link>
                      );
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
                        const path = getLinkPath(link);
                        return isExternalLink(path) ? (
                          <a
                            href={path}
                            key={j}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link}
                          </a>
                        ) : (
                          <Link to={path} key={j}>
                            {link}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}

              <div className="footer-logo-center">
                <img src={footer} alt="Footer Logo" className="mobile-logo" />
                <div className="social-icons py-3">
                  <a
                    href="https://www.linkedin.com/company/franchiselistings/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.facebook.com/franchiselistings"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/franchiselistings"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.youtube.com/@franchiselistings"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>

              <hr className="footer-line" />
              <p className="copyright py-4">
                Franchise Listings, LLC 2025 © All Rights Reserved
              </p>
            </div>

            <hr className="footer-line" />
            <p className="desktop-copyright mb-0">
              Franchise Listings, LLC 2025 © All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
