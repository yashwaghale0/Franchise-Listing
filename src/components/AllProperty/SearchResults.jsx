import { useLocation } from "react-router-dom";
import PropertyListing from "../AllProperty/PropertyListing";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  return (
    <div className="search-results-page">
      <PropertyListing query={query} />
    </div>
  );
};

export default SearchResults;
