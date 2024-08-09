import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Paper, Zoom, FormControlLabel, Switch} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
const Background = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
//   backgroundImage: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
});

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    // Save settings logic
    alert('Settings saved successfully!');
  };

  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Background>
      <Zoom in={checked} style={{ transitionDelay: checked ? '300ms' : '0ms' }}>
        <Paper elevation={10} className="p-8 rounded-lg max-w-md w-full">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            SignUp
          </Typography>
          <form onSubmit={handleSaveSettings}>
            <Box mb={3}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="New Password"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Box mb={3} display="flex" flexDirection="column">
              <FormControlLabel
                control={
                  <Switch
                    checked={notifications}
                    onChange={(e) => setNotifications(e.target.checked)}
                  />
                }
                label="Enable Notifications"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                  />
                }
                label="Dark Mode"
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
            >
              Create Account 
            </Button>
            </Link>
          </form>
        </Paper>
      </Zoom>
    </Background>
  );
}
