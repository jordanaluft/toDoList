import react from 'react';

function List() {
    return(
        <div className='list'>
            <h3>Title</h3>
            <div className='list--buttons'>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default List