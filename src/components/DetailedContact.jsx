import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '../assets/models/ConfirmationModal';

const DetailedContact = ({ match, contacts, onDeleteContact }) => {
  const history = useHistory();
  const nomContact = match.params.nom;
  const contact = contacts.find((contact) => contact.nom === nomContact);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDelete = () => {
    // Call the onDeleteContact function with the contact name
    onDeleteContact(nomContact);

    // Redirect to the "AfficherContacts" page after deletion
    history.push('/contacts');

    // Close the modal after deletion
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  if (!contact) {
    return <p>Contact non trouvé.</p>;
  }

  return (
    <div className="contact-details">
    <h2>Informations détaillées sur {nomContact}</h2>
    <p>Téléphone: {contact.telephone || 'Non renseigné'}</p>
    <p>Email: {contact.email || 'Non renseigné'}</p>
    <button className="delete-button" onClick={() => setShowDeleteConfirmation(true)}>
      Supprimer
    </button>

    {showDeleteConfirmation && (
      <Modal onClose={handleCancelDelete}>
        <p>Êtes-vous sûr de vouloir supprimer ce contact?</p>
        <button className="delete-button" onClick={handleDelete}>
          Oui
        </button>
      </Modal>
    )}
  </div>
  );
};

export default DetailedContact;