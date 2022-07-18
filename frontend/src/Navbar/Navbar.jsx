import NavLinks from "../NavLinks/NavLinks";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
          </Link>
        </div>
        <div className="resources">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
