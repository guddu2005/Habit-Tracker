import React, { useState } from 'react';
import { Avatar, Button, TextField, Box, Typography, Paper, Zoom } from '@mui/material';
import { styled } from '@mui/system';

const Background = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ProfileContainer = styled(Paper)({
  padding: '2rem',
  maxWidth: '600px',
  width: '100%',
  borderRadius: '15px',
  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
});

const StyledAvatar = styled(Avatar)({
  width: '100px',
  height: '100px',
  marginBottom: '1rem',
});

export default function ProfilePage() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [bio, setBio] = useState('Web Developer with a passion for creating beautiful and functional web applications.');
  const [checked, setChecked] = useState(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Update profile logic
    alert('Profile updated successfully!');
  };

  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Background>
      <Zoom in={checked} style={{ transitionDelay: checked ? '300ms' : '0ms' }}>
        <ProfileContainer>
          <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
            <StyledAvatar alt="Profile Picture" src="https://via.placeholder.com/100" />
            <Typography variant="h5" component="h1" gutterBottom>
              {name}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="center">
              {bio}
            </Typography>
          </Box>
          <form onSubmit={handleUpdateProfile}>
            <Box mb={3}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Bio"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{ mt: 2 }}
            >
              Update Profile
            </Button>
          </form>
        </ProfileContainer>
      </Zoom>
    </Background>
  );
}
