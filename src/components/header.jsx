import { useContext, useState } from "react";
import { UserContext } from "../App";

export const Header = () => {
    const { setIsClickedTask, modalRef } = useContext(UserContext)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 460);

    const addNewTask = () => {
        setIsClickedTask(isClickedTask => !isClickedTask)
        modalRef.current.showModal();
    }
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
                    <a onClick={addNewTask}>{isMobile ? '+' : '+ Add New Task'}</a>
                </div>
            </div>
        </>
    )
}