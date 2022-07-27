import React from 'react';
import logo from '../image/logo.png'
import { AppBar, Typography, Toolbar } from '@mui/material/'

function Header(){
    return (
       <div className='header'>
           <AppBar position='relative'>
               <Toolbar>
                <img className='header--logo' src={logo}/>
                <Typography variant="h9" component="div" sx={{ flexGrow: 1 }}>
                    <h2>ToDo List</h2>
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;