export const Header = () => {

    return (
        <div className="header">

            <div className="header-left">
                <div className="header-left-one">
                    <img src="hamburger.svg" />
                    <img src="kanban.svg" />
                </div>
                <h4>Platform Launch</h4>
            </div>
            <div className="header-right">
                <a>+ Add New Task</a>
            </div>
        </div>
    )
}