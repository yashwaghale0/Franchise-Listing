import "./Header.css";
import { BsList } from "react-icons/bs";
import { PiSignInLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import logo from "../../assets/images/fl-logo.svg";
import mobileLogo from "../../assets/images/mobile-logo.svg";
import LoginModal from "./LoginModel";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="header_section d-flex justify-content-between align-items-center py-3">
        <span className="Mobile-icon">
          <BsList />
        </span>
        <img src={logo} alt="Main Header Logo" className="main-Logo" />
        <img src={mobileLogo} alt="Main Header Logo" className="mobile-logo" />

        <div className="d-flex">
          <button
            className="btn d-flex align-items-center gap-10 sign_in"
            onClick={() => setOpen(true)}
          >
            <PiSignInLight />
            Sign In
          </button>
          <LoginModal isOpen={open} onClose={() => setOpen(false)} />
          <button
            className="btn border rounded d-flex align-items-center gap-10 create_account"
            onClick={() => setOpen(true)}
          >
            <CiUser />
            Create Account
          </button>
        </div>
      </div>
    </>
  );
}
