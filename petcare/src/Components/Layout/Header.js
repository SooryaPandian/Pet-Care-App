import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, #FF6F61 0%, #FF9A8B 100%)',
  backdropFilter: 'blur(15px)',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
}));

const Title = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
  color: '#FFFFFF',
  fontWeight: '700',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '1.8rem',
}));

const NavButton = styled(Button)(({ theme }) => ({
  margin: '0 8px',
  color: '#FFFFFF',
  borderRadius: '30px',
  padding: '8px 16px',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '0.9rem',
  '&:hover': {
    backgroundColor: '#FFFFFF',
    color: '#FF6F61',
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
}));

const NavBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
}));
function Header({ isAuthenticated,onLogin }) {
  const handleLogout = () => {
      
    localStorage.removeItem('username');
    onLogin(false);
  };
  return (
    <StyledAppBar>
      <Container>
        <Toolbar>
          <Title variant="h4">PetCare</Title>
          <NavBox>
            <StyledLink to="/">
              <NavButton>Home</NavButton>
            </StyledLink>
            <StyledLink to="/report">
              <NavButton>Report</NavButton>
            </StyledLink>
            <StyledLink to="/contact">
              <NavButton>Contact</NavButton>
            </StyledLink>
            <StyledLink to="/services">
              <NavButton>Services</NavButton>
            </StyledLink>
            {isAuthenticated ? (
              <NavButton onClick={handleLogout}>Logout</NavButton>
            ) : (
              <StyledLink to="/login">
                <NavButton>Login</NavButton>
              </StyledLink>
            )}
          </NavBox>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Header;
