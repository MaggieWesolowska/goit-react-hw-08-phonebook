import css from '../EditContacts/EditContacts.module.css';
import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';

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
      setEditPhone(editContact.number);
    }
  }, [editContact]);

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: editName,
      number: editPhone,
      id: id,
    };
    handleEdit(contact);
  };

  return (
    <div className={css.modalOverlay}>
      <Paper elevation={3}>
        <div className={css.modal}>
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
                defaultValue={editContact.number}
                onChange={e =>
                  setEditPhone(e.currentTarget.value)
                }></input>
            </label>
            <button type='submit'>Edit</button>
          </form>
        </div>
      </Paper>
    </div>
  );
};
