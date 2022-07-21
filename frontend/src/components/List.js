import react from 'react';

function List(props) {
    return(
        <div className='list'>
            <h3>{props.title}</h3>
            <div className='list--buttons'>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default List