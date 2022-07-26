import React from 'react';
import ToDo from './ToDo'

const List = ({ toDoList, handleToggle }) => {
    return(
        <div className='list'>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle}/>
                        // {/* /returns each item/ */}
                )
            })}
        </div>
    );
}

export default List;