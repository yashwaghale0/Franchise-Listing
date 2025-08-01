import { FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbCirclePercentage } from "react-icons/tb";
import { Link } from "react-router-dom";

const PropertyCard = ({ data }) => {
  const {
    id,
    logo,
    name,
    category,
    subcategory,
    description,
    priceLow,
    priceHigh,
    franchisefee,
    royalty,
    code,
  } = data;

  return (
    <div className="property-card">
      <div className="franchiseDetails-card">
        <Link
          to={`/franchise/${data.id}`}
          className="text-decoration-none text-dark"
        >
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-2">
              <div className="text-center mb-0 image-container">
                <img src={logo} alt={name} className="img-fluid image-card" />
              </div>
              <hr />
              <h5 className="franchise-name px-2 py-0">{name}</h5>
              <div className="d-flex gap-10 my-1 px-2 py-1">
                <button className="category-btn">{category}</button>
                <button className="category-btn">{subcategory}</button>
              </div>
              <hr />
              <div className="px-2">
                <table className="table franchise-meta table-borderless mb-0 p-2">
                  <tbody>
                    <tr>
                      <td>
                        <span className="stats-content gap-10">
                          {/* <FaMoneyBillWave className="me-2" /> */}
                          <span className="card-icon-head">Inv Low</span>
                          {priceLow}
                        </span>
                      </td>
                      <td>
                        <span className="stats-content gap-10">
                          {/* <FaCalendarAlt className="me-2" /> */}
                          <span className="card-icon-head">Inv High</span>{" "}
                          {priceHigh}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="stats-content gap-10">
                          {/* <TbCirclePercentage className="me-2" /> */}
                          <span className="card-icon-head">Franchise Fee</span>
                          {franchisefee}
                        </span>
                      </td>
                      <td>
                        <span className="stats-content gap-10">
                          {/* <MdOutlineLocationOn className="me-2" /> */}
                          <span className="card-icon-head">Royalty</span>
                          {royalty}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="unique_code">FLS ID #OPPO{code}</span>
                      </td>
                    </tr>
                    <td className=" py-2">
                      <span className="learn-more">Learn More</span>
                    </td>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
