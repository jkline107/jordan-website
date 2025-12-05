import heroImage from "../assets/website-images/dappled_grass.JPG";

function Home() {
  return (
    <section className="home">
      <div className="hero container">
        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="Cinematic lawn with dappled light"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h1 className="hero-title">
              CINEMATIC IMAGES WITH EMOTIONAL COLOR
            </h1>
            <p className="hero-subtitle">
              Bringing director&apos;s visions to life!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
