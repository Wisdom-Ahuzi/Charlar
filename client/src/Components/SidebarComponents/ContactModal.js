import React, { useRef } from "react";

const ContactModal = ({ handleCloseModal, setModalState }) => {
  const inputIdRef = useRef();
  const inputNameRef = useRef();

  const handleCreateContact = (e) => {
    e.preventDefault();
    setModalState("");
    // const contactId = inputIdRef.current.value;
    // const contactName = inputNameRef.current.value;
  };

  return (
    <div className="contactmodal-Container">
      <form
        className="inner-Contactmodal-Container"
        onSubmit={handleCreateContact}
      >
        <header>
          <h3>Create contact</h3>
          <span onClick={handleCloseModal}>X</span>
        </header>
        <section className="modal-Id-Container">
          <input
            type="text"
            placeholder="Id"
            required={true}
            ref={inputIdRef}
          />
        </section>
        <section className="modal-Name-Container">
          <input
            type="text"
            placeholder="Name"
            required={true}
            ref={inputNameRef}
          />
        </section>
        <section className="create-Contact-Container">
          <button onSubmit={handleCreateContact}>Create Contact</button>
        </section>
      </form>
    </div>
  );
};

export default ContactModal;
