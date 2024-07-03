import { createContext, useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Supabase } from './components/supabase'

const UserContext = createContext()

function App() {
  const [columns, setColumns] = useState();


  useEffect(() => {

    getColumns()
  }, [])

  const getColumns = async () => {
    let { data, error } = await Supabase
      .from('Columns')
      .select()
    if (error) {
      console.log(error);
    }
    else {
      setColumns(data)
    }

  }


  console.log(columns);
  return (
    <UserContext.Provider value={{ columns, setColumns }}>



    </UserContext.Provider>
  )
}

export default App
