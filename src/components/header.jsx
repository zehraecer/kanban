import { useContext } from "react";
import { UserContext } from "../App";
import { AddNewTask } from "./modal";

export const Header = () => {
    const { isClicked, setIsClicked, modalRef } = useContext(UserContext)

    const addNewTask = () => {
        console.log(isClicked);
        setIsClicked(isClicked => !isClicked)
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