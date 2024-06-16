import { NavLink,useNavigate } from "react-router-dom";

function ReceiverHeader() {
    const navigate = useNavigate()
    const token_data = localStorage.getItem("Token_key")
    const logout = (e) => {
        e.preventDefault()
        if(!token_data){
            navigate("/receiver_login")
        }
        else{
            localStorage.removeItem("Token_key")
            navigate("/receiver_login")
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
                                <NavLink className="nav-link active" aria-current="page" to="/receiverhomepage"><i className="fas fa-home"></i></NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="#">profile</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="#">camps</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/feedback">Feedback</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                                    Message
                                </NavLink>
                                <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/msg">Compose</NavLink></li>  
                                <li><NavLink className="dropdown-item" to="/receiverinbox">Inbox</NavLink></li>   
                                </ul>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/searchblood">BloodSearch</NavLink>
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
        </>
     );
}

export default ReceiverHeader;