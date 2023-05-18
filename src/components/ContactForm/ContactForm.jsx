import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from '../../redux/contacts/operations.js';
import { selectContacts } from '../../redux/contacts/selectors.js';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        console.log('er');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isContactRepeat = contacts.find(el => el.name === name);

    if (isContactRepeat) {
      alert('Already in Contacts');
      return;
    }
    const contact = {
      name,
      number,
    };

    dispatch(addContact(contact));

    event.target.reset();
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{
        paddingBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <TextField
        sx={{ width: 400 }}
        id="filled-basic"
        label="☏ Name"
        variant="filled"
        type="text"
        name="name"
        onChange={inputChange}
        placeholder="Name Surname"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <TextField
        sx={{ width: 400 }}
        id="filled-basic"
        label="☏ Phone number"
        variant="filled"
        type="tel"
        name="number"
        onChange={inputChange}
        placeholder="000-00-00"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button
        sx={{
          height: 45,
          width: 140,
          mt: '20px',
          color: '#420080',
          backgroundColor: '#e6ccff',
          borderRadius: '25px',

          '&:hover:not(.active)': {
            color: '#e6ccff',
            backgroundColor: '#420080',
          },
        }}
        type="submit"
        variant="contained"
      >
        Add contact
      </Button>
    </Box>
  );
};
