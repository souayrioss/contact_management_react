import React from 'react';
import { Link } from 'react-router-dom';

const AfficherContacts = ({ contacts }) => {
  return (
    <div className="contacts-list-container" k>
      <h2>Liste des contacts</h2>
      {contacts.map((contact) => (
        <div key={contact.nom} className="contact-item">
          <Link to={`/contact/${contact.nom}`} className="contact-details-link">
            {contact.nom}
          </Link>

        </div>
      ))}
    </div>
  );
};

export default AfficherContacts;