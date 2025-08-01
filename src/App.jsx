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
import SignIn from "./components/accounts/SignIn";
import TempFooter from "./components/Footer/TempFooter";
import StickyScrollHeader from "./components/Header/StickyScrollHeader";
import SearchResults from "./components/AllProperty/SearchResults";
import FranchiseOpportunities from "./components/AllProperty/FranchiseOppirtunities";
import FranchiseDetail from "./components/AllProperty/FranchiseDetail";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TempHeader from "./components/Header/TempHeader";
import PrivacyPolicy from "./components/PolicyPages/PrivacyPolicy";
import TermsOfUse from "./components/PolicyPages/TermsOfUse";
import SiteMap from "./components/PolicyPages/SiteMap";

function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <TempHeader />
      <StickyScrollHeader />
      <Hero />
      <FranchiseSlider />
      {/* <FranchiseBrokerSlider />
      <FranchiseSale />
      <FranchiseLocation /> */}
      <CommercialSites />
      {/* <Funding /> */}
      <UpcomingEvents />
      <FreeAccount />
      {/* <Footer /> */}
      <TempFooter />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/search" element={<SearchResults />} />
        <Route
          path="/franchise-Opportunities"
          element={<FranchiseOpportunities />}
        />
        <Route path="/franchise/:id" element={<FranchiseDetail />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-use" element={<TermsOfUse />} />
        <Route path="site-map" element={<SiteMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
