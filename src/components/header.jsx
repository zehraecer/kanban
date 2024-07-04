import { useContext } from "react";
import { UserContext } from "../App";
import { AddNewTask } from "./modal";

export const Header = () => {
    const { isClickedTask, setIsClickedTask, modalRef } = useContext(UserContext)

    const addNewTask = () => {
        setIsClickedTask(isClickedTask => !isClickedTask)
        modalRef.current.showModal();
    };

    return (
        <>

            <div className="header">

                <div className="header-left">
                    <div className="header-left-one">
                        <img src="hamburger.svg" />
                        <img src="kanban.svg" />
                    </div>
                    <h4>Platform Launch</h4>
                </div>
                <div className="header-right">
                    <a onClick={addNewTask}>+ Add New Task</a>
                </div>
            </div>
        </>
    )
}