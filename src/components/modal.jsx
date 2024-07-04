import { useContext, useRef } from "react";
import { UserContext } from "../App";
export const AddNewTask = () => {

    const { modalRef, columns } = useContext(UserContext)
    const inputRef = useRef()
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
                                <option value={column.column_name}>{column.column_name}</option>
                            )
                        })}
                    </select>
                </form>

            </dialog>
        </>
    )
}