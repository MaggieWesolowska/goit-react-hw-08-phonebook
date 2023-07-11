import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './slices/contactsSlice';
import filterSlice from './slices/filterSlice';
import { combineReducers } from 'redux';
// import { authReducer } from './auth/auth-slice';
// import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer } from 'redux-persist';

const reducers = combineReducers({
  contactsSlice,
  filterSlice,
});
export const store = configureStore({
  reducer: reducers,
});

//-------------------------

// const persistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(persistConfig, authReducer),
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });
