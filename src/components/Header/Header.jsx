import "./Header.css";
import { BsList } from "react-icons/bs";
import { PiSignOutBold } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

export default function Header() {
  return (
    <>
      <div className="header_section d-flex justify-content-between align-items-center py-3">
        <BsList />
        <h3>franchiselistings</h3>
        <div className="d-flex">
          <button className="btn d-flex align-items-center gap-10 sign_in">
            <PiSignOutBold />
            Sign In
          </button>
          <button className="btn border rounded d-flex align-items-center gap-10 create_account">
            <CiUser />
            Create Account
          </button>
        </div>
      </div>
    </>
  );
}
