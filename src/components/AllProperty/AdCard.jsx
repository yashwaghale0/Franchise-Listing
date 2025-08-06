import React from "react";
import adsimage from "../../assets/images/adsimage.png";

const AdCard = ({ type = "white" }) => {
  if (type === "purple") {
    return (
      <div className="card h-100 border-0 create-account-card text-white d-flex flex-column justify-content-center align-items-center p-3">
        <h5 className="mb-2">Create your Account!</h5>
        <p className="text-center mb-3">
          Lorem ipsum dolor sit amet. Sed autem dolor et voluptatum vitae aut
          modi vel.
        </p>
        <button className="account-learn">
          <span>Learn More</span>
        </button>
      </div>
    );
  }

  return (
    <div className="card h-100 border-0 shadow-sm">
      <span className="advertisement">ADVERTISEMENT</span>
      <img src={adsimage} alt="create your Account" />
      <div className="p-3">
        <span className=" mb-1 sponsor-subtext my-2">
          Sponsored By <span className="">State Farm - OMD 2</span>
        </span>
        <h6 className="mb-2 franchise-name">Small Business Insurance</h6>
        <p className="text-muted mb-3 ads-description">
          Lorem ipsum dolor sit amet. Sed autem dolor et voluptatum vitae aut
          modi vel commodi.
        </p>
        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
};

export default AdCard;
