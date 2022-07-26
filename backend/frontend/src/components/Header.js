import React from 'react';
import logo from '../image/logo.png'

function Header(){
    return (
       <div className='header'>
            <img className='header--logo' src={logo}/>
            <h1>ToDo List</h1>
        </div>
    )
}

export default Header;