import "./header.element.css";
import { getTitleFromLocation } from "../utils/header.js";
import { useLocation } from "react-router-dom";

//const location = window.location.pathname;

const Header = () => {
  const location = useLocation();
  const title = getTitleFromLocation(location.pathname);

  return (
    <div className="headerContainer">
      <a href="/main" className="headerMaintext">
        FoodFinder
      </a>
      <div className="headerSubtext">{title}</div>
    </div>
  );
};

export default Header;
