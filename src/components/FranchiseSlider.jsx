import "./franchiseslider.css";
import { FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbCirclePercentage } from "react-icons/tb";
import pickUp from "../assets/pickupusa.png";
import anchord from "../assets/anchord.png";
import snapology from "../assets/snapology.webp";
import jamba from "../assets/Jamba.svg";
import { CiLocationOn } from "react-icons/ci";

// Sample data – replace with dynamic props or API data as needed
const franchises = [
  {
    logo: pickUp,
    name: "PickUp USA Basketball",
    description: "PickUp USA is known for our world-class facilities",
    investment: "$500,000",
    year: "2023",
    units: "50",
  },
  {
    logo: snapology,
    name: "Snapology",
    description: "At Snapology, we believe learning should be fun.",
    investment: "$200,000",
    year: "2023",
    units: "20",
  },
  {
    logo: anchord,
    name: "Anchored Tiny Homes",
    description: "Anchored Tiny Homes was a Sacramento-area...",
    investment: "$700,000",
    year: "2023",
    units: "30",
  },
  {
    logo: jamba,
    name: "Jamba",
    description: "Founded in the seaside town of...",
    investment: "$600,000",
    year: "2023",
    units: "90",
  },
];

export default function FranchiseSlider() {
  return (
    <section className="franchise-slider">
      <div className="Inner-section">
        <h2>Looking to Buy a Franchise</h2>
        <p className="subtext">
          Explore top franchise brands and discover new franchise opportunities
          in every industry.
        </p>
        <p className="location_enabled">
          <CiLocationOn size={18} />
          Populated Result Based on Location Enabled
        </p>
        <div className="franchise-card-container">
          {franchises.map((item, index) => (
            <div className="franchise-card" key={index}>
              <img src={item.logo} alt={item.name} className="franchise-logo" />
              <div className="franchise-name">{item.name}</div>
              <div className="franchise-description">{item.description}</div>
              <div className="franchise-meta py-2">
                <div>
                  <FaMoneyBillWave /> {item.investment}
                </div>
                <div>
                  <FaCalendarAlt /> {item.year}
                </div>
              </div>
              <div className="franchise-meta py-2">
                <div>
                  <TbCirclePercentage /> 6%
                </div>
                <div>
                  <MdOutlineLocationOn /> {item.units} units
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center Browse_section">
          <button className="browse-button">
            Browse Franchise Opportunities →
          </button>
        </div>
      </div>
    </section>
  );
}
