import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'
import Data from './Data'

function App() {
  const dataElements = Data.map(data => {
    return <List
            key={data.id}
            {...data}
            />
     })

  return ( 
    <div>
        <Header />
        <section>
          {dataElements}
        </section>
        {/* <Form /> */}
        <button className='app--new-button'>
          Add new task
         </button> 
    </div>
    )
}

export default App;
