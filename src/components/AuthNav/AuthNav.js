import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

import ListItem from '@mui/material/ListItem';

export const AuthNav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '25px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ListItem
        component={NavLink}
        sx={{
          color: '#420080',
          textAlign: 'center',

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
        to="/register"
      >
        Register
      </ListItem>

      <ListItem
        component={NavLink}
        sx={{
          color: '#420080',
          textAlign: 'center',

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
        to="/login"
      >
        Log In
      </ListItem>
    </Box>
  );
};
