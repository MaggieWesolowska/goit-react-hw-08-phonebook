import { Helmet, HelmetProvider } from 'react-helmet-async';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

export const Phonebook = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </HelmetProvider>
    </>
  );
};