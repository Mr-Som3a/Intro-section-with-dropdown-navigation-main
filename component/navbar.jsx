import React, { Component } from 'react';
import '../src/scss/navbar.scss'

const ArrowUp_img = '../images/icon-arrow-up.svg';
const ArrowDown_img ='../images/icon-arrow-down.svg';
class NavBar extends Component {
    
    render() { 
        const { handleAria, AriaExpanded} = this.props
        
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand fs-1 fw-bolder p-0 " href="#">snap</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li id='features' className="nav-item dropdown">
                                    <a className="nav-link" onClick={(e)=>handleAria(e)} role="button" data-bs-toggle="dropdown" aria-expanded={AriaExpanded}>
                                        Features<img src={AriaExpanded ? ArrowUp_img : ArrowDown_img} />
                                    </a>
                                    <ul className="dropdown-menu rounded-4 overflow-hidden">
                                        <li><a className="dropdown-item" href="#"><img className='me-2' src='../images/icon-todo.svg'/>Todo List</a></li>
                                        <li><a className="dropdown-item" href="#"><img className='me-2' src='../images/icon-calendar.svg'/>Calendar</a></li>
                                        <li><a className="dropdown-item" href="#"><img className='me-2' src='../images/icon-reminders.svg'/>Reminders</a></li>
                                        <li><a className="dropdown-item" href="#"><img className='me-2' src='../images/icon-planning.svg'/>Planneing</a></li>
                                    </ul>
                                </li>
                                <li id='company' className="nav-item dropdown">
                                    <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Company<img src={AriaExpanded ? ArrowUp_img : ArrowDown_img}/>
                                    </a>
                                    <ul className="dropdown-menu rounded-4  overflow-hidden">
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
                        </div>
                        <div className="collapse navbar-collapse justify-content-end">
                            <ul className='navbar-nav '>
                                <li className="nav-item">
                                    <button className="btn me-2" href="#">Login</button>
                                </li>
                                <li className="nav-item col-8 ">
                                    <button className="btn btn-outline-dark rounded-3 " href="#">Register</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}
 
export default NavBar;