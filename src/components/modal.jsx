import { useContext, useRef } from "react";
import { UserContext } from "../App";
import { Supabase } from "./supabase";

export const AddNewTask = () => {
    const { modalRef, columns, setColumns, } = useContext(UserContext)
    const inputRef = useRef()

    const createTask = async (e) => {
        e.preventDefault()
        const formData = new FormData(inputRef.current)
        const formObj = Object.fromEntries(formData.entries());
        console.log(formObj);
        const { data, error } = await Supabase
            .from('Tasks')
            .insert([
                {
                    title: formObj.newTask,
                    title_column: formObj.status
                }
            ])
            .select()
        if (error) {
            console.log(error);
        } else {
            console.log(columns);
            setColumns([...columns, ...data])
        }
        modalRef.current.close();
    }
    return (
        <>
            <dialog className="newTaskDialog" ref={modalRef}>
                <h1>Add New Task</h1>
                <form ref={inputRef} className="newTaskForm">
                    <span>Title</span>
                    <input type="text" name="newTask" placeholder="e.g. Take coffee bre" />
                    <span>Status</span>
                    <select name="status">
                        {columns.map(column => {
                            return (
                                <option key={column.id} value={column.column_name}>{column.column_name}</option>
                            )
                        })}
                    </select>
                    <button className="createTask" onClick={createTask}>Create Task</button>
                </form>
            </dialog>
        </>
    )
}