import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'
import data from './data.json'

import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container'
import { Card, Typography } from '@mui/material'

function App() {
  const [ toDoList, setToDo ]  = useState(data);

  const ListPage = () => {
    let [item, setItem] = useState([])
    
    useEffect(() => {
      getItem()
    }, [])

    let getItem = async () => {

      let response = await fetch('http://localhost:8000/api/todos/')
      let data = await response.json()
      console.log('DATA:', data)
      setItem(data)
    }
    return(
      <div>
        item
      </div>
    )
  }

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
        <Container maxWidth="xl">
          <Typography variant="h5" align="center" color="textSecondary">
            <Card className="form" sx={{ mr:4}} >
              <Form addNew={addNew} />
            </Card>
            <Card sx={{ padding: 2, maxWidth: 600, ml: 12.5 }}>
              <List className="list" toDoList={toDoList} handleToggle={handleToggle}/>
              <Button 
                className="clear--button"
                startIcon={<DeleteIcon />}
                color='primary' 
                variant='contained' 
                onClick={handleDelete}
                >
                  Clear All
              </Button>
            </Card>
          </Typography>
        </Container>
     </div>
    )
}

export default App;
