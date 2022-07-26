import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'
import data from './data.json'

function App() {
  const [ toDoList, setToDo ]  = useState(data);

  const handleToggle = (id) => {
    let complete = toDoList.map(title => {
      return title.id === Number(id) ? { ...title, completed: !title.completed } : { ...title};
    });
    setToDo(complete);
  }

  const handleDelete = () => {
    let deleted = toDoList.filter (title => {
      return !title.completed;
    });
    setToDo(deleted);
  }

  const addNew = (userInput) => {
    let newTask = [...toDoList];
    newTask = [ ...newTask, { id: toDoList.length + 1, title: userInput, completed: false
    }];
    setToDo(newTask);
  }

  return ( 
    <div>
        <Header />
        <Form addNew={addNew}/>
        <List toDoList={toDoList} handleToggle={handleToggle}/>
        <button onClick={handleDelete}>Clear All</button>
     </div>
    )
}

export default App;
