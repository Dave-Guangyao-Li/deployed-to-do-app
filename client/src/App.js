import React, { useEffect, useState } from 'react'
import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'

const App = () => {
  const userEmail = 'dave@test.com' // this would be passed in from the front end, e.g. from a login form or from a cookie or something like that
  const [tasks, setTasks] = useState([{}]) // this would be the state that holds the tasks

  const getData = async () => {

    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await response.json()
      // console.log(json)
      setTasks(json)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  // console.log(tasks)

  // sort tasks by date
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  console.log("sorted: ", sortedTasks)


  return (
    <div className='app'>
      <ListHeader listName={'Holiday tick list'} />
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task} />)}
    </div>
  )
}

export default App