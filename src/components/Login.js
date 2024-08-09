import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Box, Typography, Paper, Zoom } from '@mui/material';
import { styled } from '@mui/system';

const Background = styled('div')({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //   backgroundImage: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
});

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        // Store the email and password in localStorage
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // Proceed with login logic
        alert('Logged in successfully!');

        // Reset the form fields
        setEmail('');
        setPassword('');
    };

    React.useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <Background>
            <Zoom in={checked} style={{ transitionDelay: checked ? '300ms' : '0ms' }}>
                <Paper elevation={10} className="p-8 rounded-lg max-w-md w-full">
                    <Typography variant="h4" component="h2" align="center" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <Box mb={3}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Box>
                        <Box mb={3}>
                            <TextField
                                label="Password"
                                variant="outlined"
                                type="password"
                                fullWidth
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Box>
                        <Link to="/">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                size="large"
                                sx={{ mb: 3 }}
                                className='bg-gray-600'
                            >
                                Login
                            </Button>
                        </Link>
                    </form>
                    <Box textAlign="center">
                        <Link to="/forgot-password" className="text-blue-600 hover:underline text-sm">
                            Forgot Password?
                        </Link>
                    </Box>
                    <Box textAlign="center" mt={2}>
                        <Link to="/signup" className="text-blue-600 hover:underline text-sm">
                            Don't have an account? Sign Up
                        </Link>
                    </Box>
                </Paper>
            </Zoom>
        </Background>
    );
}
