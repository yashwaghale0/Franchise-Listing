import React from "react";
import TempHeader from "../Header/TempHeader";
import TempFooter from "../Footer/TempFooter";
import "./policy.css";

const PrivacyPolicy = () => {
  return (
    <>
     <TempHeader />
    <div className="container py-5 policy-section">
      <h1>Privacy Policy</h1>
      <p>Effective Date: July 31, 2025</p>

      <p>
        We value your privacy and are committed to protecting your personal information.
        This Privacy Policy explains how we collect, use, and share your data.
      </p>

      <h3>1. Information We Collect</h3>
      <p>
        We may collect personal information such as your name, email address, and phone
        number when you interact with our site.
      </p>

      <h3>2. How We Use Information</h3>
      <p>
        We use your information to provide services, improve our website, and communicate
        with you.
      </p>

      <h3>3. Sharing Information</h3>
      <p>
        We do not sell or share your personal information with third parties except to
        provide services you requested or if required by law.
      </p>

      <h3>4. Cookies</h3>
      <p>
        We may use cookies to enhance your browsing experience. You can control cookie
        settings through your browser.
      </p>

      <h3>5. Changes to This Policy</h3>
      <p>
        We may update our Privacy Policy from time to time. Updates will be posted on this
        page.
      </p>
    </div>
    <TempFooter />
    </>
  );
};

export default PrivacyPolicy;
