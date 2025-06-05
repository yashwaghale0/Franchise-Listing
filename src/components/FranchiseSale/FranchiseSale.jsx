import "./FranchiseSale.css";
import { FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbCirclePercentage } from "react-icons/tb";
import image from "../../assets/download.jpeg";
import { CiLocationOn } from "react-icons/ci";

// Sample data – replace with dynamic props or API data as needed
const franchiseSale = [
  {
    logo: image,
    name: "PickUp USA Basketball",
    description: "PickUp USA is known for our world-class facilities",
    investment: "$500,000",
    year: "2023",
    units: "50",
  },
  {
    logo: image,
    name: "Snapology",
    description: "At Snapology, we believe learning should be fun.",
    investment: "$200,000",
    year: "2023",
    units: "20",
  },
  {
    logo: image,
    name: "Anchored Tiny Homes",
    description: "Anchored Tiny Homes was a Sacramento-area...",
    investment: "$700,000",
    year: "2023",
    units: "30",
  },
  {
    logo: image,
    name: "Jamba",
    description: "Founded in the seaside town of...",
    investment: "$600,000",
    year: "2023",
    units: "90",
  },
];

export default function FranchiseSale() {
  return (
    <>
      <section className="franchise-slider">
        <div className="Inner-section">
          <h2>Find a Franchise for Sale</h2>
          <p className="subtext">
            Explore fully operational franchise resale listings in your area and
            take over an existing business.
          </p>
          <p className="location_enabled">
            <CiLocationOn size={18} />
            Populated Result Based on Location Enabled
          </p>
          <div className="franchise-salecard-container">
            {franchiseSale.map((item, index) => (
              <div className="franchise-Salecard" key={index}>
                <img
                  src={item.logo}
                  alt={item.name}
                  className="franchise-image"
                />
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

          <div className="text-center py-4">
            <button className="browse-button">
              Browse Franchise Opportunities →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
