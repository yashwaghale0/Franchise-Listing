import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import "./Header.css";

export default function LoginModal({ isOpen, onClose }) {
  const [tab, setTab] = useState("signin");
  const [role, setRole] = useState("");

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed z-50 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen p-4 bg-black bg-opacity-50">
        <Dialog.Panel className="bg-white rounded-2xl w-full max-w-md p-6">
          <Dialog.Title className="signup-title  text-center">
            Welcome to Franchise Listings
          </Dialog.Title>

          {/* Tabs */}
          <div className="flex mb-6 w-50 tabchange-text">
            <button
              onClick={() => setTab("signin")}
              className={`flex-1 text-center py-2 font-medium border-b-2 ${
                tab === "signin"
                  ? "border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setTab("signup")}
              className={`flex-1 text-center py-2 font-medium border-b-2 ${
                tab === "signup"
                  ? "border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
            >
              New Account
            </button>
          </div>

          {/* Form Content */}
          {tab === "signin" ? (
            <div className="space-y-4 signin-form">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full border rounded-md p-2 focus:outline-none mb-4"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border rounded-md p-2 focus:outline-none mb-4"
              />
              <button className="w-full  text-white rounded-md py-2 signin-btn">
                Sign in
              </button>
              <div className="text-start mt-4">
                <a href="#" className=" forget-pass hover:underline">
                  Forgot your password?
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-4 signup-form">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border rounded-md p-2 text-gray-600 focus:outline-none mb-4"
              >
                <option value="">I am</option>
                <option value="user">Looking to Buy Franchise</option>
                <option value="franchise">Franchisor</option>
                <option value="franchise">Franchisee</option>
                <option value="franchise">Commercial Real Estate Agent</option>
                <option value="franchise">Franchise Broker</option>
                <option value="franchise">Business Broker</option>
                <option value="franchise">Franchise Attorney</option>
                <option value="franchise">Immigration Attorney</option>
                <option value="franchise">
                  Other Franchise Service Professional
                </option>
              </select>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full border rounded-md p-2 focus:outline-none mb-4"
              />
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                placeholder="Create password"
                className="w-full border rounded-md p-2 focus:outline-none mb-4"
              />
              <div className="text-sm text-gray-500 space-y-1 password-requirements">
                <p>At least 8 characters</p>
                <p>Mix of letters and numbers</p>
                <p>At least 1 special character</p>
                <p>At least 1 lowercase and 1 uppercase letter</p>
              </div>
              <button className="w-full signin-btn text-white rounded-md py-2 ">
                Sign in
              </button>
              <label className="text-sm flex items-center gap-2 mt-2 accept-terms">
                <input type="checkbox" className="accent-blue-600 m-2" />
                By submitting, I accept Franchise Listings{" "}
                <a href="#" className="text-blue-600 underline">
                  terms of use.
                </a>
              </label>
            </div>
          )}

          {/* Social Login */}
          <div className="my-6 border-t pt-4 text-center text-gray-500 text-sm">
            Or connect with
          </div>
          <div className="flex justify-center gap-3 social-login-btn">
            <button className="border py-2 px-4 rounded text-lg w-30 text-center">
              <FaGoogle size={22} />
            </button>
            <button className="border py-2 px-4 rounded text-lg w-30">
              <FaApple size={22} />
            </button>
            <button className="border py-2 px-4 rounded text-lg text-blue-600 w-30">
              <FaFacebookF size={22} />
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
