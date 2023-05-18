import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm.jsx';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations.js';
import { selectIsLoading } from 'redux/contacts/selectors.js';
import { selectError } from 'redux/contacts/selectors.js';
import { Box } from '@mui/material';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '40px',
        paddingBottom: '40px',
      }}
    >
      {error && <p>{error}</p>}

      {isLoading ? (
        <p
          style={{
            fontSize: '48px',
            textAlign: 'center',
          }}
        >
          Wait a little...{' '}
        </p>
      ) : (
        <Box
          sx={{
            width: 480,
            color: '#420080',
            textAlign: 'center',
          }}
        >
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Find contacts by name</h2>
          <Filter />

          <ContactList />
        </Box>
      )}
    </div>
  );
}