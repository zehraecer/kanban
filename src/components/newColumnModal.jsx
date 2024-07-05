import { useContext, useRef } from "react"
import { UserContext } from "../App"
import { Supabase } from "./supabase"

export const NewColumnModal = () => {
    const { modalRef2, columns, setColumns } = useContext(UserContext)
    const formRef = useRef()

    const createColumn = async (e) => {
        e.preventDefault()
        const formData = new FormData(formRef.current)
        const formObj = Object.fromEntries(formData.entries());
        console.log(formObj);
        const { data, error } = await Supabase
            .from('kanban_columns')
            .insert([
                { column_name: formObj.newColumn },
            ])
            .select()
        if (error) console.log(error);
        setColumns([...columns, ...data])
        modalRef2.current.close()
    }
    return (

        <dialog className="newTaskDialog" ref={modalRef2}>
            <h1>Add New Column</h1>
            <form ref={formRef} className="newTaskForm">
                <span>Column Name</span>
                <input type="text" name="newColumn" placeholder="e.g. Take coffee bre" />
                <button className="createTask" onClick={createColumn}>Create Column</button>
            </form>
        </dialog>
    )
}