import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

export default function LandingPageTemplate({ children }) {
  return (
    <div className="landing-page-template">
      <header>
        <Logo />
        <Navbar />
      </header>
      <div className="landing-page-body">{children}</div>
    </div>
  );
}
