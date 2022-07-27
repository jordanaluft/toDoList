import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';


function Form({ addNew }){
    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNew(userInput);
        setUserInput("");
    }

    return (
        <form onSubmit={handleSubmit} className="form">
                <TextField 
                    variant='filled'
                    placeholder='Title'
                    value = {userInput}
                    onChange = {handleChange}
                />
                <Button 
                    type='submit'  
                    variant='contained'
                    startIcon={<SaveIcon />}
                    className="form--button"
                    // sx={{ ml: 14 }}
                    >
                        Add Task
                </Button>
        </form>
        )
}

export default Form;