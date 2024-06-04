import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => [isActive ? "active" : ""].join(" ")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => [isActive ? "active" : ""].join(" ")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => [isActive ? "active" : ""].join(" ")}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
