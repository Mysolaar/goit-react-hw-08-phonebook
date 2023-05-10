import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter.js';
import { contactsReducer } from './contacts.js';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer
  },
});