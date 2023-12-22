import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AjoutContact from '../components/AddContact';
import AfficherContacts from '../components/AfficherContacts';
import DetailedContact from '../components/DetailedContact';

const Routes = ({ contacts, onAjouterContact }) => (
    <Switch>
      <Route path="/" exact render={() => <AjoutContact onAjouterContact={onAjouterContact} />} />
      <Route path="/contacts" render={() => <AfficherContacts contacts={contacts} />} />
      <Route path="/contact/:nom" render={({ match }) => <DetailedContact match={match} contacts={contacts} />} />
    </Switch>
  );

export default Routes;
