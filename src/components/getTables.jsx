import { useContext } from "react";
import { UserContext } from "../App";
import { Supabase } from './components/supabase'



export const GetTables = () => {
    const { columns, setColumns } = useContext(UserContext)

    return (
        <>

        </>
    )
}