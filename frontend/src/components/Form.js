import React from 'react';

function Form(){
    return (
        <div className='form'>
            <input 
                type="text"
                placeholder='Title'
            />
            <div className='form--completed'>
                <input className='form--checkbox' type="checkbox"/>
                <h3>Completed </h3>
            </div>
            <button>
                Create new item
            </button>
        </div>
        )
}

export default Form;