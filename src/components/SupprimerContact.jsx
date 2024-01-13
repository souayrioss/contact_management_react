import React, { useState } from 'react';
import ConfirmationModal from '../assets/models/ConfirmationModal';

const SupprimerContact = ({ supprimerContact, contacts }) => {
  const [nom, setNom] = useState('');
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const handleSupprimerContact = () => {
    const contactExistant = contacts.find((contact) => contact.nom === nom);

    if (contactExistant) {
      setConfirmationModalOpen(true);
    } else {
      alert(`Aucun contact trouvé avec le nom ${nom}.`);
    }
  };

  const handleConfirmDelete = () => {
    setConfirmationModalOpen(false);
    supprimerContact(nom);
  };

  const closeModal = () => {
    setConfirmationModalOpen(false);
  };

  return (
    <div>
      <h2>Supprimer un contact</h2>
      <label>Nom du contact à supprimer:</label>
      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />

      <button type="button" onClick={handleSupprimerContact}>
        Supprimer
      </button>

      <ConfirmationModal
        isOpen={confirmationModalOpen}
        closeModal={closeModal}
        handleConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default SupprimerContact;
