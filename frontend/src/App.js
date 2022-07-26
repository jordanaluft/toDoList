import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'
import data from './data.json'

function App() {
  const [ toDoList, setToDo ]  = useState(data);

  return ( 
    <div>
        <Header />
        <List toDoList={toDoList}/>
        {/* <Form /> */}
     </div>
    )
}

export default App;
