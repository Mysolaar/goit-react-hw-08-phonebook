import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import { Box } from '@mui/material';
import { useAuth } from '../../hooks/useAuth.js';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      sx={{
        gap: '25px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ListItem
        component={NavLink}
        sx={{
          color: '#420080',
          '&.active': {
            color: '#ffb3ff',
              border: '4px solid #ffb3ff',
              borderRadius: '25px',
              fontWeight: 'bold',
              backgroundColor: 'white'
          },
          '&:hover:not(.active)': {
            color: 'white',
          },
        }}
        to="/"
      >
        Home
      </ListItem>

      {isLoggedIn && (
        <ListItem
          component={NavLink}
          sx={{
            color: 'white',
            '&.active': {
              color: '#ffb3ff',
              border: '4px solid #ffb3ff',
              borderRadius: '25px',
              fontWeight: 'bold',
              backgroundColor: 'white'
            },
            '&:hover:not(.active)': {
              color: 'white',
            },
          }}
          to="/contacts"
        >
          Contacts
        </ListItem>
      )}
    </Box>
  );
};