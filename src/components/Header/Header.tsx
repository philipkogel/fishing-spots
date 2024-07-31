import * as React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container } from '@mui/material';
import Image from 'next/image';


function ResponsiveAppBar() {
  return (
    <AppBar color='transparent' position="static" sx={{ boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            KARPIOZA
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;