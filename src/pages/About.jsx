import aboutPortrait from "../assets/website-images/profile_pic.JPG";

function About() {
  return (
    <section className="page">
      <div className="container about-layout">
        <div className="about-text">
          <h1 className="section-heading">WHO AM I?</h1>
          <p className="body-text">
            My name is Jordan Klein. I&apos;m a Charlotte-born and based
            photographer, cinematographer, and colorist. I studied Film and
            Television Production at the Savannah College of Art and Design and
            graduated in 2024 with my BFA.
          </p>
          <p className="body-text">
            Outside of the film and photography world, I also love music,
            nature, travel, and my two cats.
          </p>
        </div>

        <div className="about-image-wrapper">
          <img
            src={aboutPortrait}
            alt="Jordan Klein portrait"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
