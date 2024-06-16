import { NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <>
          {/* <h1>this is navbar</h1> */}

            <nav className="navbar navbar-expand-lg bg-dark-subtle">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/homepage"><i className="fas fa-home"></i></NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/aboutus">About us</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/contactus">Contact us</NavLink>
                                </li>

                                <li className="nav-item">
                                <NavLink className="nav-link" to="/events">Events</NavLink>
                                </li>

                                <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                                    More About Blood
                                </NavLink>
                                <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/blooddonationtype">Blood Donation type</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/commondisease">Commondisease</NavLink></li>   
                                <li><NavLink className="dropdown-item" to="/compatible">Compatibility</NavLink></li>                                                               
                                </ul>
                                </li>

                                <li className="nav-item">
                                <NavLink className="nav-link" to="/searchdonors">Donors</NavLink>
                                </li>

                                
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/showstory">Story</NavLink>
                                </li>

                                <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" >
                                    Registration
                                </NavLink>
                                <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/donor">Donor</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/receiver">Receiver</NavLink></li>
                                </ul>
                                </li>
                                <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                                    Login
                                </NavLink>
                                <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/admin_login">Admin</NavLink></li>  
                                <li><NavLink className="dropdown-item" to="/donor_login">Donor</NavLink></li>   
                                <li><NavLink className="dropdown-item" to="/receiver_login">Receiver</NavLink></li>                                                               

                                </ul>
                                </li>

                            </ul>
                     </div>
                </div>
             </nav>
        </>
    )
}
export default Navbar