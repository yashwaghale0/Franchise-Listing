import "./App.css";
import FranchiseSlider from "./components/FranchiseSlider";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FranchiseBrokerSlider from "./components/FranchiseBrokerSlider/FranchiseBrokerSlider";
import FranchiseSale from "./components/FranchiseSale/FranchiseSale";
import FranchiseLocation from "./components/FranchiseLocation/FranchiseLocation";
import CommercialSites from "./components/CommercialSites/CommercialSites";
import Funding from "./components/Funding/Funding";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";
import FreeAccount from "./components/FreeAccount/FreeAccount";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FranchiseSlider />
      <FranchiseBrokerSlider />
      <FranchiseSale />
      <FranchiseLocation />
      <CommercialSites />
      <Funding />
      <UpcomingEvents />
      <FreeAccount />
      <Footer />
    </>
  );
}

export default App;
