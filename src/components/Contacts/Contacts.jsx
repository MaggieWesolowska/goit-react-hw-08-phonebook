import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './ContactForm/ContactForm.module.css';
import {
  fetchContacts,
  deleteContact,
  editContact,
} from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilters,
} from '../redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilters);
  const [isEditModalOpen, setIsEditModalOpen] =
    useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleEdit = contact => {
    dispatch(editContact(contact));
    closeModal();
  };

  const handleModalOpen = e => {
    setIsEditModalOpen(true);
    setEditId(e);
  };

  const closeModal = () => {
    setIsEditModalOpen(false);
  };

  const getFilteredContacts = () => {
    const filteredContactList =
      contacts &&
      contacts.filter(contact => {
        return contact.name
          .toLowerCase()
          .includes(filter.toLowerCase());
      });
    return filteredContactList;
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333',
        background: 'lightgrey',
        margin: 20,
        borderRadius: 10,
        paddingBottom: 30,
      }}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contacts}>Contacts</h2>
      <Filter filter={filter} />
      <ContactList
        contacts={getFilteredContacts()}
        handleEdit={handleEdit}
        closeModal={closeModal}
        handleDelete={handleDelete}
        handleModalOpen={handleModalOpen}
        isEditModalOpen={isEditModalOpen}
        editId={editId}
      />
    </div>
  );
};

export default Contacts;
