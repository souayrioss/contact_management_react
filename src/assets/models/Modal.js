// Modal.js
import React from 'react';

const Modal = ({ isOpen, closeModal, contact }) => {
  if (!isOpen || !contact) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Contact Details</h2>
        <p><strong>Nom:</strong> {contact.nom}</p>
        <p><strong>Téléphone:</strong> {contact.telephone || 'Non renseigné'}</p>
        <p><strong>Email:</strong> {contact.email || 'Non renseigné'}</p>
        <button onClick={closeModal}>Fermer</button>
      </div>
    </div>
  );
};

export default Modal;
