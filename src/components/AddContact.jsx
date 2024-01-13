import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AjoutContact = ({ onAjouterContact }) => {
  const history = useHistory();

  const [nom, setNom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (nom.trim() === '') {
      alert('Le nom du contact ne peut pas être vide.');
      return;
    }

    const nouveauContact = {
      nom,
      telephone,
      email,
    };

    onAjouterContact(nouveauContact);

    setNom('');
    setTelephone('');
    setEmail('');

    history.push('/contacts');
  };

  return (
    <div className="add-contact-container">
      <h2>Ajouter un contact</h2>
      <label className="form-label">Nom:</label>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        className="form-input"
      />

      <label className="form-label">Téléphone:</label>
      <input
        type="text"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        className="form-input"
      />

      <label className="form-label">Email:</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-input"
      />

      <button onClick={handleSubmit} className="submit-button">
        Ajouter
      </button>
    </div>
  );
};

export default AjoutContact;
