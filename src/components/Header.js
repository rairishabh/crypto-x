import {AppBar,ThemeProvider, Container,createTheme, Toolbar,Typography,Select,MenuItem} from "@mui/material";
import React from 'react';
import '../css/header.css';

const Header = () => {

  const darkTheme = createTheme({
    palette: {
      primary:{
        main: "#fff",
      },
      type:"dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <div>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography className="title" varient='h6'>CRYPTO-X</Typography>
            <Select variant="outlined"  
            style={{
              width:100,
              height:40,
              marginRight:15,
            }}>
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'INR'}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
      
    </div>
    </ThemeProvider>
  )
}

export default Header
