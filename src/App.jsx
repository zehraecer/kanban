import { createContext, useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Supabase } from './components/supabase'

const UserContext = createContext()

function App() {
  const [columns, setColumns] = useState();
  const [tasks, setTasks] = useState()
  const [subtasks, setSubtasks] = useState()



  useEffect(() => {

    getColumns()
    getTasks()
    getSubtasks()
  }, [])

  const getColumns = async () => {

    let { data, error } = await Supabase.from('Columns').select()
    if (error) {
      console.log(error);
    }
    else {
      setColumns(data)
    }
  }

  const getTasks = async () => {

    let { data, error } = await Supabase.from('Tasks').select()
    if (error) {
      console.log(error);
    }
    else {
      setTasks(data)
    }
  }
  const getSubtasks = async () => {

    let { data, error } = await Supabase
      .from('Subtasks')
      .select('*')
    if (error) {
      console.log(error);
    }
    else {
      setSubtasks(data)
    }
  }

  console.log(subtasks);

  return (
    <UserContext.Provider value={{ columns, setColumns, tasks, setTasks, subtasks, setSubtasks }}>


    </UserContext.Provider>
  )
}

export default App
