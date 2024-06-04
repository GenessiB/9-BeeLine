import LandingPageTemplate from "../../Components/LandingPageTemplate/LandingPageTemplate";

export default function About() {
  return (
    <main className="about-page">
      <LandingPageTemplate>
        <div className="aboutpage-body">
          <div className="aboutPage-card">
            <p>
              <em>About BeeLine</em> <br/> Welcome to BeeLine, your ultimate companion for daily productivity and personal organization. Designed with simplicity and
              efficiency in mind, BeeLine helps you manage your tasks, track your bills, and organize your schedule—all in one intuitive platform.
              Whether you're looking to categorize your day-to-day tasks, keep on top of your payments, or just need a little nudge with our timely
              reminders, BeeLine has you covered. Plus, our unique Book Nook feature allows you to track what you’re reading, plan your future books,
              and monitor your reading trends over time. At BeeLine, we believe in making productivity not just achievable but also enjoyable. With
              our seamless calendar integration and progress tracking, you can navigate your busy life with ease and style. Dive into BeeLine today
              and start making the most of every day!
            </p>
          </div>
        </div>
      </LandingPageTemplate>
    </main>
  );
}
