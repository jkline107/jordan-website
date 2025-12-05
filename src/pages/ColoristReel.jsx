function ColoristReel() {
  return (
    <section className="page page-dark">
      <div className="container">
        <h1 className="giant-heading">COLORIST REEL</h1>

        <p className="page-lead">
          Please set the video to 1080p for the best viewing experience!
        </p>

        <div className="video-wrapper">
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/t-W9rVVl4CI"
            title="Jordan Klein Colorist Reel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ColoristReel;
