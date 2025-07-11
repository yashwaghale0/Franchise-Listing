import { FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbCirclePercentage } from "react-icons/tb";

const PropertyCard = ({ data }) => {
  const { title, description, image, price, date, returns, units } = data;

  return (
    <div className="property-card">
      <div className="searchfranchise-card">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body p-2">
            <div className="text-center mb-0 image-container">
              <img src={image} alt={title} className="img-fluid image-card" />
            </div>
            <h5 className="franchise-name">{title}</h5>
            <p className="franchise-description mb-0 line-clamp-2">
              {description}
            </p>
            <table className="table franchise-meta table-borderless mb-0">
              <tbody>
                <tr>
                  <td>
                    <span className="stats-content">
                      <FaMoneyBillWave className="me-2" />
                      {price}
                    </span>
                  </td>
                  <td>
                    <span className="stats-content">
                      <FaCalendarAlt className="me-2" />
                      {date}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="stats-content">
                      <TbCirclePercentage className="me-2" />
                      {returns}
                    </span>
                  </td>
                  <td>
                    <span className="stats-content">
                      <MdOutlineLocationOn className="me-2" />
                      {units}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
