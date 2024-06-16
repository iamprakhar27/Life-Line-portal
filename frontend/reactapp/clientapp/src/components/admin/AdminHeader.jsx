import { NavLink, useNavigate } from "react-router-dom";

function AdminHeader() {
    const navigate = useNavigate()
    const token_data = localStorage.getItem("Token_key")
    const logout = (e) => {
        e.preventDefault()
        if (!token_data) {
            navigate("/admin_login")
        }
        else {
            localStorage.removeItem("Token_key")
            navigate("/admin_login")
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark-subtle">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/adminhomepage"><i className="fas fa-home"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/allfeedback">Allfeedbacks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/allcontact">Allcontacts</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                                    Appointments </NavLink>
                                <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/bloodappointments">Appointments</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/viewappointments">ViewAppointments</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                                    Camp </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/addcamp">Add</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">View</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                                    veiw </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/veiwdonor">Donors</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/veiwreceiver">Receivers</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                                    Messages </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/admincompose">Compose</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/admininbox">Inbox</NavLink></li>
                                </ul>
                            </li>

                        </ul>
                        <div class="d-flex align-items-center">
                            <button t type="button" className=" bg-dark btn btn-primary" onClick={logout}>
                                Logout
                            </button>
                        </div>

                    </div>
                </div>
            </nav>

        </>)

}

export default AdminHeader;




