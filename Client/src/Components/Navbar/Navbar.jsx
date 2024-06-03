import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>About</NavLink>
        </li>
        <li>
          <NavLink>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
