import react from 'react';
import ToDo from './ToDo'

const List = ({ toDoList }) => {
    return(
        <div className='list'>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} />
                        // {/* /returns each item/ */}
                )
            })}
        </div>
    );
}

export default List;