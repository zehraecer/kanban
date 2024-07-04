import { useContext } from "react";
import { UserContext } from "../App";

export const Content = () => {
    const { columns, tasks } = useContext(UserContext)
    return (
        <>
            <div className="container">
                {columns.map(column => {
                    return (
                        <div key={column.id} className="container-one">
                            <div className="container-one-column">
                                <div>
                                    <h1></h1>

                                </div>
                                <h3>{column.column_name}</h3>
                            </div>
                            {tasks.filter(x => x.title_column === column.column_name)
                                .map(task => {
                                    return (
                                        <p className="taskTitle">{task.title}</p>

                                    )
                                })}

                        </div>

                    )
                })}

                <a className="newColumn">+ New Column</a>
            </div>
        </>
    )
}