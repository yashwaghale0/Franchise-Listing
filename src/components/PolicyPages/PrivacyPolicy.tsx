import React from "react";
import TempHeader from "../Header/TempHeader";
import TempFooter from "../Footer/TempFooter";
import './policy.css';

const PrivacyPolicy = () => {
  return (
    <>
      <TempHeader />
      <div className="container py-5 policy-section">
        <h1>Privacy Notice</h1>
        <p>
          People Trust Community Federal Credit Union (PTCFCU) respects your privacy and is committed
          to protecting your personal information.
        </p>

        <h3>Information We Collect:</h3>
        <ul>
          <li>Personal identification information (name, address, SSN, etc.)</li>
          <li>Account information (transactions, balances, payment history)</li>
          <li>Credit history and credit scores</li>
        </ul>

        <h3>How We Use Your Information:</h3>
        <ul>
          <li>Processing transactions and managing your accounts</li>
          <li>Complying with legal and regulatory requirements</li>
          <li>Providing quality customer service</li>
        </ul>

        <h3>Information Sharing:</h3>
        <p>
          PTCFCU does not sell your personal information. Information may be shared only as permitted by law:
        </p>
        <ul>
          <li>With service providers under strict confidentiality agreements</li>
          <li>To comply with legal or regulatory requests</li>
          <li>To protect against fraud or other illegal activities</li>
        </ul>

        <h3>Protection of Your Information:</h3>
        <ul>
          <li>Secure data storage with restricted access</li>
          <li>Encryption of electronic information</li>
          <li>Regular employee training on privacy and data protection</li>
        </ul>

        <h3>People Trust Community Federal Credit Union</h3>
        <p>
          4103 E Broadway Street, North Little Rock, AR 72117<br />
          PH: (501)710-6455<br />
          EMAIL: info@ptcfcu.org
        </p>

        <h3>Your Privacy Rights:</h3>
        <ul>
          <li>You have the right to opt-out of certain information-sharing practices.</li>
          <li>You have access to review and correct your personal information.</li>
        </ul>

        <p>
          For questions or further details about our Privacy Notice, please contact us directly.
        </p>
      </div>
      <TempFooter />
    </>
  );
};

export default PrivacyPolicy;
