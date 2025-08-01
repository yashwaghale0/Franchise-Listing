import React from "react";
import TempHeader from "../Header/TempHeader";
import TempFooter from "../Footer/TempFooter";
import "./policy.css";

const TermsOfUse = () => {
  return (
    <>
    <TempHeader />
    <div className="container py-5 policy-section">
      <h1>Terms of Use</h1>
      <p>Last updated: July 31, 2025</p>

      <p>
        Welcome to our website. By accessing or using this site, you agree to be bound by
        these Terms of Use. If you disagree with any part of the terms, then you may not
        access the website.
      </p>

      <h3>1. Use of Site</h3>
      <p>
        You may use this site for lawful purposes only. You may not use it to engage in
        any activity that is illegal or that violates the rights of others.
      </p>

      <h3>2. Intellectual Property</h3>
      <p>
        All content, including text, graphics, logos, and images, is the property of the
        website owner or its content suppliers and protected by copyright laws.
      </p>

      <h3>3. Changes to Terms</h3>
      <p>
        We reserve the right to modify these Terms at any time. You should review this
        page regularly.
      </p>

      <p>If you have questions, please contact us.</p>
    </div>
    <TempFooter />
    </>
  );
};

export default TermsOfUse;
