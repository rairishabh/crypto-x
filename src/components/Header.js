import {AppBar, Container, Toolbar,Typography,Select,MenuItem,makeStyles} from "@mui/material";
import React from 'react'

const useStyle = makeStyles(() => ({
  title: {
    flex:1,
    color:"gold",
    fontFamily: "Montserrat",
    fontWeight:"bold",
    cursor: "pointer",
  }
}))

const Header = () => {


  return (
    <div>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography>CRYPTO-X</Typography>
            <Select variant="outlined"  
            style={{
              width:100,
              height:40,
              marginLeft:15,
            }}>
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'INR'}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
      
    </div>
  )
}

export default Header
