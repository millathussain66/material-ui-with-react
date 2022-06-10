import React from "react";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Logo from './img/millat.svg'
import Button from '@mui/material/Button'


export default function Header() {



  return (
    <header>
      <AppBar color="inherit" >
        <Toolbar>
          <Box
            component="img"
            sx={{
              height: 95,
            }}
            alt="Your logo."
            src={Logo}
          />

        </Toolbar>
      </AppBar>
      <AppBar position="fixed" color="primary" />
      <Toolbar>
        <Typography variant="div">
        </Typography>
      </Toolbar>
    </header>
  );
}