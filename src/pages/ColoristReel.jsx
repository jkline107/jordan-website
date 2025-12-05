 function ColoristReel() {
  return (
    <section className="page page-dark">
      <div className="container">
        <h1 className="giant-heading">COLORIST REEL</h1>
        <p className="page-lead">
          Please set the video to 1080p for the best viewing experience!
        </p>

        <div className="video-wrapper">
          {/* TODO: replace VIDEO_ID_HERE with your actual YouTube ID */}
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            title="Colorist reel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ColoristReel;
