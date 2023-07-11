import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://64a7192c096b3f0fcc811265.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (err) {
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
      return response.data;
    } catch (err) {
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
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// import axios from 'axios';

// const BASE_URL =
//   'https://632c9c735568d3cad8896f5b.mockapi.io/api/v1';
// const mockapi = axios.create({ baseURL: BASE_URL });

// export const getContacts = async () => {
//   try {
//     const { data } = await mockapi.get('/contacts');
//     console.log(data);
//     return data;
//   } catch (error) {
//     return error.message;
//   }
// };

// export const postContact = async contact => {
//   try {
//     const { data } = await mockapi.post('/contacts', {
//       ...contact,
//     });

//     return data;
//   } catch (error) {
//     return error.message;
//   }
// };

// export const deleteContact = async id => {
//   try {
//     const { data } = await mockapi.delete(
//       `/contacts/${id}`
//     );

//     return data;
//   } catch (error) {
//     return error.message;
//   }
// };
