import LandingPageTemplate from "../../Components/LandingPageTemplate/LandingPageTemplate";

export default function HomePage() {
  return (
    <main className="homepage">
      <LandingPageTemplate>
        <div className="homepage-body">
          <h2>
            Streamline your day with <em>BEELINE</em>
          </h2>
          <h3>The direct solution for busy bees...</h3>
          <button>Join Now</button>
        </div>
      </LandingPageTemplate>
    </main>
  );
}
