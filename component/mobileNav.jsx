const MobileNav = ({ active,showMenu}) => {
    return (
        <>
            <img className="xImage" onClick={showMenu} src="images/icon-close-menu.svg" alt="" />
            <ul className="navbar-nav">
                <li id='features' className={active ? "nav-item dropdown active" : "nav-item dropdown"}>
                    <a className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Features
                    </a>
                    <ul className="dropdown-menu rounded-4 overflow-hidden border-0 shadow">
                        <li><a className="dropdown-item" href="#"><img className='me-2' src='images/icon-todo.svg' />Todo List</a></li>
                        <li><a className="dropdown-item" href="#"><img className='me-2' src='images/icon-calendar.svg' />Calendar</a></li>
                        <li><a className="dropdown-item" href="#"><img className='me-2' src='images/icon-reminders.svg' />Reminders</a></li>
                        <li><a className="dropdown-item" href="#"><img className='me-2' src='images/icon-planning.svg' />Planneing</a></li>
                    </ul>
                </li>
                <li id='company' className={active ? "nav-item dropdown active" : "nav-item dropdown"}>
                    <a onClick={e => handleClick(e)} className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Company
                    </a>
                    <ul className="dropdown-menu rounded-4 overflow-hidden border-0 shadow">
                        <li><a className="dropdown-item" >History</a></li>
                        <li><a className="dropdown-item" >Our Team</a></li>
                        <li><a className="dropdown-item" >Blog</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Careers</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
            </ul>
            <div className="mt-5 w-100  text-center">
                <ul className='navbar-nav '>
                    <li className="nav-item">
                        <button className="login btn " href="#">Login</button>
                    </li>
                    <li className="nav-item ">
                        <button className="btn btn-outline-dark rounded-3 w-100" href="#">Register</button>
                    </li>
                </ul>
            </div>
        </>
    );
}
 
export default MobileNav;