import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import contactsSlice from './slices/contactsSlice';
import filterSlice from './slices/filterSlice';
import { combineReducers } from 'redux';
import authSlice from '../redux/auth/slice';
import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
// } from 'redux-persist';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      ],
    },
  }),
];

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const reducers = combineReducers({
  contactsSlice,
  filterSlice,
  auth: persistReducer(authPersistConfig, authSlice),
});

export const store = configureStore({
  reducer: reducers,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
