import React from "react";

const ToDo = ({ todo, handleToggle }) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div className={todo.completed ? "completed" : ""}
        id = {todo.id}
        onClick={handleClick}>
            {/* checks if the item is completed, if true, className = completed */}
           {todo.title}
        </div>
    );
}

export default ToDo;