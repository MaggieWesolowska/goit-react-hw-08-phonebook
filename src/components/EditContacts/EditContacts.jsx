import css from '../EditContacts/EditContacts.module.css';
import { useState, useEffect } from 'react';

export const EditContacts = ({
  handleEdit,
  id,
  editContact,
}) => {
  const [editName, setEditName] = useState('');
  const [editPhone, setEditPhone] = useState('');

  useEffect(() => {
    if (editContact) {
      setEditName(editContact.name);
      setEditPhone(editContact.phone);
    }
  }, [editContact]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(id);
    const contact = {
      name: editName,
      phone: editPhone,
      id: id,
    };
    handleEdit(contact);
  };

  console.log(editContact);

  return (
    <div className={css.modalOverlay}>
      <form onSubmit={handleSubmit}>
        <label name='name'>
          <input
            defaultValue={editContact.name}
            onChange={e =>
              setEditName(e.currentTarget.value)
            }></input>
        </label>
        <label name='phone'>
          <input
            defaultValue={editContact.phone}
            onChange={e =>
              setEditPhone(e.currentTarget.value)
            }></input>
        </label>
        <button type='submit'>Edit</button>
      </form>
    </div>
  );
};
