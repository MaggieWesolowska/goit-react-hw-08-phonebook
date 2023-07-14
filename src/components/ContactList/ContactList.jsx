import propTypes from 'prop-types';
import css from './ContactList.module.css';
import { EditContacts } from '../EditContacts/EditContacts';

export const ContactList = ({
  contacts,
  handleDelete,
  handleEdit,
  handleModalOpen,
  closeModal,
  isEditModalOpen,
  editId,
}) => {
  const getEditContact = () => {
    return contacts.find(contact => contact.id === editId);
  };

  return (
    <div className={css.contactListContainer}>
      {' '}
      <ul className={css.contactList}>
        {' '}
        {contacts &&
          contacts.map((contact, id) => (
            <li key={id} className={css.contactListItem}>
              {contact.name}: {contact.phone}
              <button
                className={css.contactItemBtn}
                type='button'
                name='edit'
                // id={contact.id}
                onClick={() => handleModalOpen(contact.id)}>
                Edit
              </button>
              <button
                type='button'
                className={css.contactItemBtn}
                onClick={() => handleDelete(contact.id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
      {isEditModalOpen && (
        <EditContacts
          id={editId}
          editContact={getEditContact()}
          closeModal={closeModal}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      phone: propTypes.string.isRequired,
      createdAt: propTypes.string,
    })
  ),
  handleDelete: propTypes.func.isRequired,
  handleEdit: propTypes.func,
};
