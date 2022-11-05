import "./ContactForm.css";
import { useForm } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xpzkjkab", {
    data: {
      subject: "Someone reached out!!",
    },
  });
  if (state.succeeded) {
    console.log("it works!!!");
  }
  return (
    <div className="contact-form-container">
      <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
        <input
          className="form-inputs"
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
        />
        <input
          className="form-inputs"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <div className="form-subjects-container">
          <div className="form-subject">
            <input
              type="radio"
              name="radio"
              id="work"
              value="work"
              className="radio-btn"
            />
            <label htmlFor="work" className="subject-text">
              Work
            </label>
          </div>
          <div className="form-subject">
            <input
              type="radio"
              name="radio"
              id="collab"
              value="collaboration"
              className="radio-btn"
            />
            <label htmlFor="collab" className="subject-text">
              Collaboration
            </label>
          </div>
          <div className="form-subject">
            <input
              type="radio"
              name="radio"
              id="chat"
              value="chat"
              className="radio-btn"
            />
            <label htmlFor="chat" className="subject-text">
              Chat
            </label>
          </div>
          <div className="form-subject">
            <input
              className="form-inputs"
              type="text"
              name="other"
              id="other"
              placeholder="Other"
            />
          </div>
        </div>
        <textarea
          className="form-inputs"
          name="textarea"
          id="message"
          cols="25"
          rows="9"
        ></textarea>
        <button className="submit-btn" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
