import React from "react";
import TempHeader from "../Header/TempHeader";
import TempFooter from "../Footer/TempFooter";

const TermsOfUse = () => {
  return (
    <>
      <TempHeader />
      <div className="container py-5 policy-section">
        <h1>Terms of Use</h1>
        <p>Last updated: July 31, 2025</p>

        <p>
          Welcome to the People Trust Community Federal Credit Union (PTCFCU) website. By
          accessing or using this website or any associated digital services, you agree to comply
          with the following terms and conditions:
        </p>

        <h3>1. Acceptance of Terms</h3>
        <p>
          Your access to and use of this website is subject to these Terms of Use and all applicable
          laws and regulations.
        </p>

        <h3>2. Permitted Use</h3>
        <ul>
          <li>This website and its content are provided solely for your personal, non-commercial use.</li>
          <li>
            You agree not to reproduce, distribute, modify, or create derivative works from this content
            without prior written permission from PTCFCU.
          </li>
        </ul>

        <h3>3. Privacy</h3>
        <p>Your use of this website is governed by our Privacy Policy, available for your review.</p>

        <h3>4. Security</h3>
        <ul>
          <li>You agree not to disrupt or interfere with the security or usability of the website.</li>
          <li>
            Any unauthorized attempts to access, alter, or damage this website or its content may
            result in legal action.
          </li>
        </ul>

        <h3>5. Liability</h3>
        <p>
          PTCFCU provides this website and its content on an &quot;as-is&quot; basis without warranties of
          any kind. PTCFCU will not be liable for any direct, indirect, incidental, consequential, or
          punitive damages arising from your use or inability to use this website.
        </p>

        <h3>6. Third-Party Links</h3>
        <p>
          Our website may contain links to third-party websites. PTCFCU does not endorse, control, or
          assume responsibility for the content, privacy policies, or practices of these third-party
          sites.
        </p>

        <h3>7. Contact Information</h3>
        <p>
          <strong>People Trust Community Federal Credit Union</strong><br />
          4103 E Broadway Street, North Little Rock, AR 72117<br />
          PH: (501) 710-6455<br />
          EMAIL: <a href="mailto:info@ptcfcu.org">info@ptcfcu.org</a>
        </p>

        <h3>8. Changes to Terms</h3>
        <p>
          PTCFCU reserves the right to modify these Terms of Use at any time without notice. Continued
          use of the website constitutes acceptance of any revisions.
        </p>

        <h3>9. Governing Law</h3>
        <p>
          These terms shall be governed by and construed in accordance with federal law and the laws
          of the state in which PTCFCU operates.
        </p>

        <p>If you have questions regarding these Terms of Use, please contact us directly.</p>
      </div>
      <TempFooter />
    </>
  );
};

export default TermsOfUse;
