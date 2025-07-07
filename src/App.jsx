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

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Header />
      <StickyScrollHeader />
      <Hero />
      <FranchiseSlider />
      {/* <FranchiseBrokerSlider />
      <FranchiseSale />
      <FranchiseLocation /> */}
      <CommercialSites />
      {/* <Funding /> */}
      <UpcomingEvents />
      {/* <FreeAccount /> */}
      {/* <Footer /> */}
      <TempFooter />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/franchise_list">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/search" element={<SearchResults />} />
        <Route
          path="/franchise-Opportunities"
          element={<FranchiseOpportunities />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
