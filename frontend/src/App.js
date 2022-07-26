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

  return ( 
    <div>
        <Header />
        <Form />
        <List toDoList={toDoList} handleToggle={handleToggle}/>
     </div>
    )
}

export default App;
