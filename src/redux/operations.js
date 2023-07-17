import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

axios.defaults.baseURL =
  'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      Notify.success('Fetching success!', {
        position: 'right-bottom',
      });
      return response.data;
    } catch (err) {
      Notify.failure('Error!', {
        position: 'right-bottom',
      });
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        ...contact,
      });
      Notify.success('New contact added success!', {
        position: 'right-bottom',
      });
      return response.data;
    } catch (err) {
      Notify.failure('Error!', {
        position: 'right-bottom',
      });
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `/contacts/${contactId}`
      );
      Notify.success('Delete success!', {
        position: 'right-bottom',
      });
      return response.data;
    } catch (err) {
      Notify.failure('Error!', {
        position: 'right-bottom',
      });
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/contacts/${data.id}`,
        {
          name: data.name,
          number: data.number,
        }
      );
      Notify.success('Edit success!', {
        position: 'right-bottom',
      });
      return response.data;
    } catch (err) {
      Notify.failure('Error!', {
        position: 'right-bottom',
      });
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
