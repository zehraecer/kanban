import { createContext, useContext, useEffect, useRef, useState } from 'react'
import './App.css'
import { Supabase } from './components/supabase'
import { Header } from './components/header'
import { Content } from './components/content'
import { AddNewTask } from './components/modal'
import { NewColumnModal } from './components/newColumnModal'

export const UserContext = createContext()

function App() {
  const [columns, setColumns] = useState([]);
  const [tasks, setTasks] = useState([])
  const [subtasks, setSubtasks] = useState([])
  const [isClickedTask, setIsClickedTask] = useState(false)
  const [isClickedColumn, setIsClickedColumn] = useState(false)
  const modalRef = useRef()
  const modalRef2 = useRef()

  useEffect(() => {
    getColumns()
    getTasks()
    getSubtasks()
  }, [columns])


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
  return (

    <UserContext.Provider value={{ columns, setColumns, tasks, setTasks, subtasks, setSubtasks, isClickedTask, setIsClickedTask, modalRef, modalRef2, isClickedColumn, setIsClickedColumn }}>
      <Header />
      <Content />
      <AddNewTask />
      <NewColumnModal />

    </UserContext.Provider>
  )
}

export default App
