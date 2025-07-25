import "./FreeAccount.css";
import { FaArrowRight } from "react-icons/fa6";

export default function FreeAccount() {
  return (
    <>
      <div className="FreeAccount_section">
        <div className="Inner-section">
          <h1>Create a Free Account</h1>
          <p>
            Whether you're exploring franchise opportunities, searching for a
            resale or commercial real estate location, or seeking trusted
            service professionals to support your journey - it all starts here.
            Franchise, brokers, attorneys, real estate agents, and service
            providerscan also create an account to get listed, connect, and
            network with franchise buyers and industry professionals across the
            globe.{" "}
          </p>
          <div className="freeaccount-section">
            <a href="https://dev.franchiselistings.com/admin/login?tab=signup">
              <button className="bg-gradient-to-r from-[#00DB62] to-[#0DA2FF] text-white px-3 py-2 rounded free-accountbtn">
                Create My Free Account
                <FaArrowRight />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
