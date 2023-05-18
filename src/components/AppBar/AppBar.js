import { Container } from '@mui/material';
import Bar from '@mui/material/AppBar';

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth.js';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Bar
      position="static"
      sx={{
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#420080',
        backgroundColor: '#e6ccff',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          textTransform: 'uppercase',
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Bar>
  );
};
