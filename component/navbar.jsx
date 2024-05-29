import React, { Component } from 'react';
import MobileNav from "./mobileNav"
import '../src/scss/navbar.scss'

class NavBar extends Component {
    
    state = {
        active: false,
        show: false,
        items: [
            { name: 'Features',id:1 ,style:"nav-item dropdown", ariaExpanded:"false" },
            { name: 'Company',id:2 , style:"nav-item dropdown", ariaExpanded:"false"},
            { name: 'Careers',id:3 ,style:"nav-item ",},
            { name: 'About',id:4 , style:"nav-item ",}
        ]
    }

    
    render() { 
        
        const { show,items } = this.state
        const handleClick = (e) => {
            console.log(e);
            const ref = [...this.state.items]

            this.setState({ active : !ref})
        }
        const showMenu = () => {
            const ref = this.state.show
            console.log("insede")
            this.setState({show:!ref})
        }
        return (
            
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
                <div className="container-fluid">
                    <a className="navbar-brand fs-1 fw-bolder d-flex p-0 " href="#">snap</a>
                    <button onClick={showMenu} className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        {/* ######### mobile menu ######### */}
                    <div className={show?'mobileMenu':'d-none'}>
                        <MobileNav showMenu={showMenu} />
                    </div>

                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {items.map(item => (
                                <li id={item.id} className={item.style}>
                                    <a name={item.name} onClick={e=>handleClick(e)} className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {item.name}
                                        {item.id == 1 ?
                                            <ul className="dropdown-menu rounded-4 overflow-hidden border-0 shadow">
                                            <li><a className="dropdown-item" href="#"><img className='me-2' src='images/icon-todo.svg' />Todo List</a></li>
                                            <li><a className="dropdown-item" href="#"><img className='me-2' src='images/icon-calendar.svg' />Calendar</a></li>
                                            <li><a className="dropdown-item" href="#"><img className='me-2' src='images/icon-reminders.svg' />Reminders</a></li>
                                            <li><a className="dropdown-item" href="#"><img className='me-2' src='images/icon-planning.svg' />Planneing</a></li>
                                        </ul>
                                            : item.id == 2 ?
                                            <ul className="dropdown-menu rounded-4 overflow-hidden border-0 shadow">
                                            <li><a className="dropdown-item" >History</a></li>
                                            <li><a className="dropdown-item" >Our Team</a></li>
                                            <li><a className="dropdown-item" >Blog</a></li>
                                        </ul>
                                                :null
                                        }
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className='navbar-nav '>
                            <li className="nav-item">
                                <button className="login btn " href="#">Login</button>
                            </li>
                            <li className="nav-item ">
                                <button className="btn btn-outline-dark rounded-3 " href="#">Register</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;