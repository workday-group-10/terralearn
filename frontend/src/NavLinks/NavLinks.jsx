import { Link } from "react-router-dom";
import "./NavLinks.css";

export default function NavLinks({ handleLogout, loggedIn}) {
  return (
    <div className="nav-links">
      <ul className="ul-links">
        <li>
          <Link className="link-component" to="/activity">
            Activity
          </Link>
        </li>
        <li>
          <Link className="link-component" to="/exercise">
            Exercise
          </Link>
        </li>
        <li>
          <Link className="link-component" to="/nutrition">
            Nutrition
          </Link>
        </li>
        <li>
          <Link className="link-component" to="/sleep">
            Sleep
          </Link>
        </li>
        <li>
          {
            !loggedIn ? <Link className="link-component" to="/login" >
            <span className="loginBtn">Login</span>
          </Link>:""}
          
         
        </li>
        <li>
          <Link className="link-component"  to="/login">
            <span className="logoutBtn" >Logout</span>
          </Link>

        </li>
        <li>
          <Link to="/register" className="link-component" >
             <button className="signupBtn"> Sign up</button>
          </Link>
         
        </li>

        <Link to="*">

        </Link>
      </ul>
    </div>
  );
}
