import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations.js';
import { selectVisibleContacts } from 'redux/contacts/selectors.js';
import { Box, Button } from '@mui/material';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  console.log(visibleContacts);

  return (
    <Box
      sx={{
        marginBottom: '50px',
        marginTop: '10px',
        gap: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {visibleContacts.map(({ name, number, id }) => (
        <Box
          sx={{
            width: '85%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: '0px',
            marginTop: '0px',
            gap: '10px',
            fontWeight: 500,
          }}
          key={id}
        >
          <Button
            sx={{
              height: 10,
              width: 10,
              padding: '30px',
              margin: '0',
              color: '#420080',
              backgroundColor: '#e6ccff',
              borderRadius: '25px',

              '&:hover:not(.active)': {
                color: '#e6ccff',
                backgroundColor: '#420080',
              },
            }}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            -
          </Button>
          <p style={{fontWeight:'bold'}}>{name}:</p> <p>{number}</p>
        </Box>
      ))}
    </Box>
  );
};
