import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth.js';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <Box
            sx={{
                gap: '25px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <p
                sx={{
                    color: '#18ffff',
                    display: 'inline-Block',
                }}
            >
                Welcome, {user.name} ✨
            </p>

            <ListItem
                component={NavLink}
                sx={{
                    color: '#420080',
                    textAlign: 'center',
                    width: 'auto',

                    '&:hover:not(.active)': {
                        color: 'white',
                    },
                }}
                onClick={() => dispatch(logOut())}
                to="/"
            >
                Log Out
            </ListItem>
        </Box>
    );
};