import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AjoutContact from './components/AddContact';
import AfficherContacts from './components/AfficherContacts';
import DetailedContact from './components/DetailedContact';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const ajouterContact = (nouveauContact, estMiseAJour) => {

    setContacts([...contacts, nouveauContact]);
  };

  const onDeleteContact = (nomContact) => {
    const updatedContacts = contacts.filter((contact) => contact.nom !== nomContact);
    setContacts(updatedContacts);
  };

  return (
    <Router>
      <div>
        <h1>Gestion des contacts</h1>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <AjoutContact onAjouterContact={ajouterContact} />}
          />
          <Route
            path="/contacts"
            render={() => <AfficherContacts contacts={contacts} />}
          />
          <Route
            path="/contact/:nom"
            render={({ match }) => (
              <DetailedContact
                match={match}
                contacts={contacts}
                onDeleteContact={onDeleteContact}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
