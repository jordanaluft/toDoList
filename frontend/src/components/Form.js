import React from 'react';

function Form(){
    return (
        <div className='form'>
            <input 
                type="text"
                placeholder='Title'
            />
            <button type='submit'>
                Add Task
            </button>
        </div>
        )
}

export default Form;