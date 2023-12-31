import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from '../operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, () => {
        handlePending;
      })
      .addCase(fetchContacts.rejected, () => {
        handleRejected;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(addContact.pending, () => {
        handlePending;
      })
      .addCase(addContact.rejected, () => {
        handleRejected;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.pending, () => {
        handlePending;
      })
      .addCase(deleteContact.rejected, () => {
        handleRejected;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { id } = action.payload;
        state.contacts = state.contacts.filter(
          contact => contact.id !== id
        );
      })
      .addCase(editContact.pending, () => {
        handlePending;
      })
      .addCase(editContact.rejected, () => {
        handleRejected;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { id, name, number } = action.payload;
        let contactEdit = state.contacts.find(
          contact => contact.id === id
        );
        contactEdit.name = name;
        contactEdit.number = number;
      });

    // [fetchContacts.pending]: handlePending,
    // [fetchContacts.rejected]: handleRejected,
    // [fetchContacts.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.contacts = action.payload;
    // },

    // [addContact.pending]: handlePending,
    // [addContact.rejected]: handleRejected,
    // [addContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.contacts.push(action.payload);
    // },

    // [deleteContact.pending]: handlePending,
    // [deleteContact.rejected]: handleRejected,
    // [deleteContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const { id } = action.payload;
    //   state.contacts = state.contacts.filter(
    //     contact => contact.id !== id
    //   );
    // },

    // [editContact.pending]: handlePending,
    // [editContact.rejected]: handleRejected,
    // [editContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const { id, name, number } = action.payload;
    //   let contactEdit = state.contacts.find(
    //     contact => contact.id === id
    //   );
    //   contactEdit.name = name;
    //   contactEdit.number = number;
    // },
  },
});

export default contactsSlice.reducer;
