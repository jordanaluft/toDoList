import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder='Title'
                value = {userInput}
                onChange = {handleChange}
            />
            <button type='submit'>
                Add Task
            </button>
        </form>
        )
}

export default Form;