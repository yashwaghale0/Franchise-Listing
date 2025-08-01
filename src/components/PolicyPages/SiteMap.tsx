import React from "react";
import TempHeader from "../Header/TempHeader";
import TempFooter from "../Footer/TempFooter";
import "./policy.css";

const SiteMap = () => {
  return (
    <>
      <TempHeader />
      <div className="container py-5 policy-section sitemap-section">
        <h1>Customer Identification Program (CIP) Notice</h1>
        <p><strong>Important Information About Procedures for Opening a New Account:</strong></p>
        <p>
          To help the government fight the funding of terrorism and money laundering activities,
          federal law requires all financial institutions, including People Trust Community Federal
          Credit Union (PTCFCU), to obtain, verify, and record information that identifies each person
          who opens an account.
        </p>
        <p><strong>What this means for you:</strong></p>
        <ul>
          <li>
            When you open an account, we will ask for your name, physical address, date of
            birth, and other identifying information.
          </li>
          <li>
            We may ask to see your driver's license, passport, or other identifying documents.
          </li>
        </ul>
        <p>
          Your cooperation assists PTCFCU in complying with federal law and helps ensure a safe
          and secure environment for all members.
        </p>
      </div>
      <TempFooter />
    </>
  );
};

export default SiteMap;
