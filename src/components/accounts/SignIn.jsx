import logo from "../../assets/images/fl-logo.svg";
import { useState } from "react";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import "./SignIn.css";
import full_login_bg from "../../assets/images/full_login_bg.png";

const SignIn = () => {
  const [tab, setTab] = useState("signin");
  const [role, setRole] = useState("");

  return (
    <div className="sign-container vh-100">
      <div className="row h-100">
        {/* Left Column - SignIn Form */}
        <div className="col-lg-4 d-flex align-items-center justify-content-center bg-white p-4">
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <h3 className="signup-title  mb-4">
              Welcome to Franchise Listings
            </h3>

            {/* Tabs */}
            <div className="d-flex mb-4 tabchange-text w-50">
              <button
                onClick={() => setTab("signin")}
                className={`flex-fill btn border-bottom sign-tabs-head ${
                  tab === "signin"
                    ? "border-primary text-primary"
                    : "text-muted"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setTab("signup")}
                className={`flex-fill btn border-bottom sign-tabs-head ${
                  tab === "signup"
                    ? "border-primary text-primary"
                    : "text-muted"
                }`}
              >
                New Account
              </button>
            </div>

            {/* Form */}
            {tab === "signin" ? (
              <div className="signin-form">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Enter email"
                />
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Enter password"
                />
                <button className="btn btn-primary w-100 mb-3 signin-btn">
                  Sign In
                </button>
                <div className="text-start">
                  <a href="#" className="forget-pass text-decoration-none">
                    Forgot your password?
                  </a>
                </div>
              </div>
            ) : (
              <div className="signup-form">
                <label>Select Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-select mb-3"
                >
                  <option value="">I am</option>
                  <option value="buyer">Looking to Buy Franchise</option>
                  <option value="franchisor">Franchisor</option>
                  <option value="franchisee">Franchisee</option>
                  <option value="agent">Commercial Real Estate Agent</option>
                  <option value="broker">Franchise Broker</option>
                  <option value="business-broker">Business Broker</option>
                  <option value="attorney">Franchise Attorney</option>
                  <option value="immigration">Immigration Attorney</option>
                  <option value="pro">
                    Other Franchise Service Professional
                  </option>
                </select>
                <label>Email</label>
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Enter email"
                />
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Create password"
                />
                <div className="small text-muted mb-3">
                  <p>
                    At least 8 characters, with letters, numbers, and symbols
                  </p>
                </div>
                <button className="btn btn-primary w-100 mb-3">
                  Create Account
                </button>
                <div className="form-check small d-flex align-items-center">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label ms-2">
                    I accept the{" "}
                    <a
                      href="#"
                      className="text-primary text-decoration-underline"
                    >
                      terms of use
                    </a>
                  </label>
                </div>
              </div>
            )}

            {/* Social Login */}
            <div className="text-center mt-4 text-muted small ">
              Or sign in with
            </div>
            <div className="d-flex justify-content-center gap-3 mt-2 social-login-btn">
              <button className="btn border ">
                <FaGoogle />
              </button>
              <button className="btn border">
                <FaApple />
              </button>
              <button className="btn border text-primary">
                <FaFacebookF />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="col-lg-8 d-none d-lg-block p-0 right-column">
          <h3>Join the World's Leading</h3>
          <h2>Franchise Marketplace</h2>
          <p>
            Browse thousand of franchise opportunities, resales, and connect{" "}
            <br></br>
            with franchise professionals around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
