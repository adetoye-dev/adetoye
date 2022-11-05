import "./Modal.css";

const Modal = () => {
  return (
    <dialog className="modal">
      <div className="close-modal-btn">
        <i className="fas fa-times"></i>
      </div>
      <p className="modal-text">
        Form Submission Failed. <br />
        Please try again!!
      </p>
    </dialog>
  );
};

export default Modal;
