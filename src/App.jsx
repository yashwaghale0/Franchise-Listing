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
import Testing from "./components/testing/Testing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function HomePage() {
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
      <Testing />
    </>
  );
}

function AppWrapper() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/franchise-listing" element={<HomePage />} />
      <Route path="/franchise-listing/sign-in" element={<SignIn />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
