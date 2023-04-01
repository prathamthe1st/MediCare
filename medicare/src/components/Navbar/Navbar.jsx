import React from "react";
import './Navbar.css'
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Logo/Logo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NavbarItem = ({ text, link, color, click }) => {
  return (
    <Link to={link} className='navbar-link' onClick={click} >
      <Typography
        variant='h6'
        color={color}
      >
        {text}
      </Typography>
    </Link>
  )
}

function Navbar() {
  const breakpoint = useMediaQuery('(max-width:720px)')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <Box 
      display='flex' 
      flexDirection='row' 
      justifyContent='space-between' 
      alignItems='center'
      sx={{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      {breakpoint && <Box>
        <IconButton onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon sx={{
            fontSize: 35,
            cursor: 'pointer',
            color: '#ffffff',
          }} />
        </IconButton>
        <Drawer
          anchor='left'
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          PaperProps={{
            sx: {
              background: 'radial-gradient(at top left, rgb(6, 199, 28), rgb(96, 252, 114))',
              color: '#ffffff'
            }
          }}
        >
          <Box
            p={2}
            width='250px'
            textAlign='center'
            role='presentation'
          >
            <Logo />
            <Box height='100px' />
            <Box m='15px'>
              <NavbarItem
                text='Home'
                color='#ffffff'
                link='/'
                click={() => setIsDrawerOpen(false)}
              />
            </Box>
            <Box height='30px' />
            <Box m='15px'>
              <NavbarItem
                text='Login'
                color='#ffffff'
                link='/login'
                click={() => setIsDrawerOpen(false)}
              />
            </Box>
            <Box height='30px' />
            <Box m='15px'>
              <NavbarItem
                text='Signup'
                color='#ffffff'
                link='/register'
                click={() => setIsDrawerOpen(false)}
              />
            </Box>
            <Box height='30px' />
            <Box m='15px'>
              <NavbarItem 
                text='Blood' 
                color='#ffffff' 
                link='/donation' 
                click={() => setIsDrawerOpen(false)} />
            </Box>
            <Box height='30px' />
          </Box>
        </Drawer>
      </Box>}
      <Box m='15px'>
        <Logo />
      </Box>
      {!breakpoint ?
        (<Box display='flex' flexDirection='row' justifyContent='space-around' alignItems='center'>
          <Box m='15px'>
            <NavbarItem 
            text='Home' 
            link='/' 
            color='#ffffff' />
          </Box>
          <Box m='15px'>
            <NavbarItem
              text='Login'
              color='#ffffff'
              // color='#000000'
              link='/login'
            />
          </Box>
          <Box m='15px'>
            <NavbarItem
              text='Signup'
              color='#ffffff'
              // color='#000000'
              link='/signup'
            />
          </Box>
          <Box m='15px'>
            <NavbarItem
              text='Blood'
              color='#ffffff'
              link='/bloodbank'
            />
          </Box>
          <Box m='15px'>
            <Link to='/profile'>
              <AccountCircleIcon sx={{
                fontSize: 35,
                cursor: 'pointer',
                color: '#ffffff',
              }} />
            </Link>
          </Box>
        </Box>) : (
          <Box m='20px'>
            <Link to='/profile'>
              <AccountCircleIcon sx={{
                fontSize: 35,
                cursor: 'pointer',
                color: '#ffffff',
              }} />
            </Link>
          </Box>
        )
      }
    </Box>
  );
}

export default Navbar;
