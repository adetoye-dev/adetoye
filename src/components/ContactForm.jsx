import "../styles/ContactForm.css";
import { useForm } from "@formspree/react";
import ReactModal from "react-modal";
import { useState, useEffect } from "react";

const ContactForm = () => {
  const [modalState, setModalState] = useState(false);
  const [modalText, setModalText] = useState("");

  ReactModal.setAppElement("#root");

  const [state, handleSubmit] = useForm("xpzkjkab", {
    data: {
      subject: "Someone reached out!!",
    },
  });

  const onFormSubmit = (event) => {
    handleSubmit(event);
    setModalState(true);
  };

  useEffect(() => {
    if (state.succeeded) {
      setModalText("Form was submitted successfully!");
      document.getElementById("contact-form").reset();
    } else {
      setModalText(
        state.errors.message || "Error submitting form. Please try again!!"
      );
    }
  }, [state]);

  return (
    <>
      <ReactModal
        isOpen={modalState}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="close-modal-btn" onClick={() => setModalState(false)}>
          <i className="fas fa-times"></i>
        </div>
        <p className="modal-text">{modalText}</p>
      </ReactModal>
      <div className="contact-form-container">
        <div className="contact-details-container">
          <div className="contact-detail">
            <span>Email: </span>adetoyeadewoye@gmail.com
          </div>
          <div className="contact-detail">
            <span>TimeZone: </span>GMT +1 (WAT)
          </div>
        </div>
        <form
          className="contact-form"
          id="contact-form"
          onSubmit={onFormSubmit}
        >
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
          <button
            className="submit-btn"
            type="submit"
            disabled={state.submitting}
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
