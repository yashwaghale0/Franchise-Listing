import "./CommercialSites.css";
import image from "../../assets/download.jpeg";
import { CiLocationOn } from "react-icons/ci";

// Sample data – replace with dynamic props or API data as needed
const franchiseSale = [
  {
    logo: image,
    description: "From $10 SF/YR",
    address1: "2100 Travis St",
    address2: "Houston TX 77002",
    address3: "Up to 114,000 Sf",
  },
  {
    logo: image,
    description: "From $58.80 SF/YR",
    address1: "600  17th St",
    address2: "Denver, CO 8202",
    address3: "Up to 800 Sf",
  },
  {
    logo: image,
    description: "From $9 SF/YR",
    address1: "4790-4802 Turney Rd",
    address2: "Garfield Heights, OH 44125",
    address3: "Up to 15,900 Sf",
  },
  {
    logo: image,
    description: "From $9 SF/YR",
    address1: "6222 San Fernando Rd",
    address2: "Glendale, CA 91201",
    address3: "Up to 1,500 Sf",
  },
];

export default function CommercialSites() {
  return (
    <>
      <section className="franchise-Location">
        <div className="Inner-section">
          <h2>Browse Commercial Real Estate Sited</h2>
          <p className="subtext">
            Search franchise ready real estate listings to secure your ideal
            business location.
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
                <div className="franchise-price">{item.description}</div>
                <div className="franchise-address py-2">
                  <p> {item.address1} </p>
                  <p> {item.address2} </p>
                  <p> {item.address3} </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center py-4">
            <button className="browse-button">
              Browse Commercial Real Estate Sites →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
