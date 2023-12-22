import React from 'react';
import '../../App.css';
const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button className="close-button"  onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default Modal;