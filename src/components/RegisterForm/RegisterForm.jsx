import { useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Notiflix from 'notiflix';
import { register } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth.js';

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const { error } = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    if (error) {
        Notiflix.Notify.failure('Something is going wrong. Please try again.');
    }

    return (
        <Box
            component="form"
            autoComplete="off"
            onSubmit={handleSubmit}
            sx={{
                pt: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                m: 5,
            }}
        >
            <TextField
                sx={{ width: 400 }}
                id="filled-basic"
                label="Name"
                variant="filled"
                type="text"
                name="name"
            />

            <TextField
                sx={{ width: 400 }}
                id="filled-basic"
                label="Email"
                variant="filled"
                type="email"
                name="email"
            />

            <TextField
                sx={{ width: 400 }}
                id="filled-basic"
                label="Password"
                variant="filled"
                type="password"
                name="password"
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
                Register
            </Button>
        </Box>
    );
};