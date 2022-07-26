import React from "react";

const ToDo = ({ todo }) => {
    return (
        <div className={todo.completed ? "completed" : ""}>
            {/* checks if the item is completed, if true, className = completed */}
           {todo.title}
        </div>
    );
}

export default ToDo;