import contactPortrait from "../assets/website-images/profile_pic.JPG";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "This is a static demo form. You can hook this up to Netlify Forms or Formspree later."
    );
  };

  return (
    <section className="page">
      <div className="container contact-layout">
        <div className="contact-text">
          <h1 className="section-heading">CONTACT ME</h1>
          <p className="body-text">
            Want to collaborate? Looking for a photographer? A colorist? A
            cinematographer? Fill out the form below or email me at{" "}
            <a href="mailto:jek78000@gmail.com">jek78000@gmail.com</a>.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="firstName">
                  Name <span className="required">(required)</span>
                </label>
                <div className="form-row">
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="email">
                  Email <span className="required">(required)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="message">
                  Message <span className="required">(required)</span>
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell me a bit about your project..."
                  required
                ></textarea>
              </div>
            </div>

            <button type="submit" className="button">
              Send
            </button>
          </form>
        </div>

        <div className="contact-image-wrapper">
          <img
            src={contactPortrait}
            alt="Jordan Klein portrait"
            className="contact-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
