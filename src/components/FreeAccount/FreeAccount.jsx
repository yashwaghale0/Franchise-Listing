import "./FreeAccount.css";
import { FaArrowRight } from "react-icons/fa6";

export default function FreeAccount() {
  return (
    <>
      <div className="FreeAccount_section">
        <div className="Inner-section">
          <h1>Create a Free Account</h1>
          <p>
            Whether you're exploring franchise opportunities on your own or
            seeking a trusted franchise broker to guide your discovery process
            and help you make the right decision, it all begins here. Create an
            account to get connected and take your first step toward franchise
            ownership.{" "}
          </p>
          <div className="freeaccount-section">
            <a href="https://dev.franchiselistings.com/user/login?tab=signup">
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
