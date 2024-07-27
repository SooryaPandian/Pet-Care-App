import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Styled components
const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #FF6F61 0%, #FF9A8B 100%)',
  padding: '20px 0',
  marginTop: 'auto',
  textAlign: 'center',
  color: '#FFFFFF',
}));

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Typography variant="body1">© 2024 PetCare. All Rights Reserved.</Typography>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
