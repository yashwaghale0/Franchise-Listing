import logo from "../../assets/images/fl-logo.svg";
import footer from "../../assets/images/footer.svg";

export default function TempFooter() {
  return (
    <>
      <div className="TempFooter-section pt-4 text-center">
        {/* <img
          src={logo}
          alt="Main Header Logo m-auto"
          className="main-Logo footer-logo"
        /> */}
        <img
          src={footer}
          alt="Main Header Logo m-auto"
          className=" footer-logo"
        />
        <hr />
        <p className="copyright py-1">
          Franchise Listings, LLC 2025 © All Rights Reserved
        </p>
      </div>
    </>
  );
}
