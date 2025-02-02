
import "../css/contact.css";

function Contact() {
  return (
    <div className="contact">
      <header>
        <h1>Contact Us</h1>
        <p>
          Have questions, need support, or just want to share your feedback?
          Reach out to us—we’d love to hear from you!”
        </p>
      </header>

      <div className="message-form">
        <h2>Shoot us a message</h2>
        <form action="#">
          <span>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </span>

          <span>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </span>

          <span>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" />
          </span>

          <span>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={12}
              cols={60}
            ></textarea>
          </span>

          <button id="send">Send</button>
        </form>
      </div>

      <div className="contact-info">
        <h1>Contact Information</h1>
        <p>support@tripmosaic.com</p>
        <p>+1 (800) 555-TRIP</p>
        <p>Monday – Friday, 9:00 AM – 6:00 PM (EST)</p>
      </div>
    </div>
  );
}

export default Contact;
