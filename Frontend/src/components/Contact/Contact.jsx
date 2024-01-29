import "./Contact.css"

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24089.617157381377!2d29.1971935!3d40.998948549999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1686430451877!5m2!1str!2str"
            width="100%"
            height="500"
          ></iframe>
        </div>
      </div>

      <div className="contact-bottom">
        <div className="container">
          <div className="contact-titles">
            <h4>Contact with us</h4>
            <h2>Get In Touch</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              saepe perspiciatis necessitatibus.
            </p>
          </div>
          <div className="contact-elements">
            <form className="contact-form">
              <div className="">
                <label>
                  Your name
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Your email
                  <span>*</span>
                </label>
                <input type="email" required />
              </div>
              <div className="">
                <label>
                  subject
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Your message
                  <span>*</span>
                </label>
                <textarea
                  id="author"
                  name="author"
                  type="text"
                  value
                  size="30"
                  required
                ></textarea>
              </div>
              <button className="btn btn-sm form-button">Send Message</button>
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-text">
                  <strong>Clotya Store</strong>
                  <p className="contact-street">
                    Clotya Store Germany - 785 15h Street, Office 478/B Green
                    Mall Berlin, De 81566
                  </p>
                  <a href="tel:11212 2323 21112">1212 12121 121212</a>
                  <a href="mailto: email@example.com">
                    Email: email@example.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-text">
                  <strong>Opening Hours</strong>
                  <p className="contact-date">Monday-Friday-: 9am-11pm</p>
                  <span>weekend close</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
