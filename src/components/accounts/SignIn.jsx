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
        <div className="col-lg-3 d-flex align-items-center justify-content-center bg-white p-4 signin-column">
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
                <button className="btn btn-primary w-100 mb-3 create-account-btn">
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
                <img
                  src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 48 48'%3E%3Cdefs%3E%3Cpath id='a' d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'/%3E%3C/defs%3E%3CclipPath id='b'%3E%3Cuse xlink:href='%23a' overflow='visible'/%3E%3C/clipPath%3E%3Cpath clip-path='url(%23b)' fill='%23FBBC05' d='M0 37V11l17 13z'/%3E%3Cpath clip-path='url(%23b)' fill='%23EA4335' d='M0 11l17 13 7-6.1L48 14V0H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%2334A853' d='M0 37l30-23 7.9 1L48 0v48H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%234285F4' d='M48 48L17 24l-4-3 35-10z'/%3E%3C/svg%3E"
                  alt="Google Icon"
                  width={20}
                />
              </button>
              <button className="btn border">
                <img
                  src="data:image/svg+xml;charset=utf-8,%3Csvg width='170' xmlns='http://www.w3.org/2000/svg' height='170'%3E%3Cpath d='M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z'/%3E%3C/svg%3E"
                  alt="Apple Icon"
                  width={20}
                />
              </button>
              <button className="btn border text-primary">
                <img
                  src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='none' class='_96z7' aria-labelledby='fb-app-logo'%3E%3Cpath d='M30 15.091C30 6.756 23.285 0 15 0S0 6.756 0 15.091C0 22.625 5.484 28.868 12.656 30V19.454H8.848V15.09h3.808v-3.324c0-3.782 2.239-5.872 5.666-5.872 1.64 0 3.358.295 3.358.295v3.714h-1.893c-1.863 0-2.443 1.164-2.443 2.358v2.83h4.16l-.665 4.362h-3.495V30C24.516 28.868 30 22.625 30 15.091z' fill='%23000'/%3E%3C/svg%3E"
                  alt="Facebook Icon"
                  width={20}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="col-lg-9 d-none d-lg-block p-0 right-column image-column">
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
