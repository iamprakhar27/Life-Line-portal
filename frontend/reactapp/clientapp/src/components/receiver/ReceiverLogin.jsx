import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Navbar from "../Navbar";
import Footer from "../Footer";
import { NavLink } from 'react-router-dom';
import "../../css/receiverlogin.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ReceiverLogin() {
    const URL = "http://localhost:4000/receiver/login"
    const [user, setUser] = useState({ id: "", pass: "" })
    const error_message = {}
    const navigate = useNavigate()
    const [error, seterror] = useState({})

    //client side validation code
    const checkempty = () => {
        if (!user.id) {
            error_message.id = "Receiver id requried"
        }
        if (!user.pass) {
            error_message.pass = "password required"
        }
    }

    const handelSubmit = async (e) => {
        e.preventDefault()
        try {
            checkempty()
            if (Object.keys(error_message).length > 0) {
                seterror(error_message)
            }
            else {
                const response = await axios.post(URL, user)
                console.log(response.data);
                setUser({ id: "", pass: "" })
                if (response.data.code === 200) {
                    navigate("/receiver_home")
                    localStorage.setItem("Token_key", response.data.token)
                    Swal.fire("Login Successful");

                }
                else if (response.data.code === 404) {
                    alert("password does not match")
                }
                else {
                    alert("receiver does not exits")
                }
            }
        }
        catch (err) {
            console.log('err' + err);
        }
    }
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }




    return (
        <>
            <Navbar />
            <div className="main2">
                <div className="container5">
                    <div>
                        <h2>May the blood you receive be the lifeline that guides you back to health and vitality.</h2>
                    </div>
                    <div>
                        <div className="card-body">
                            <form onSubmit={handelSubmit}>
                                <h1>Receiver Login</h1><hr />
                                <div className="form-outline mb-3 mt-4">
                                    <input type="text" onChange={handleChange} value={user.id} name='id' id="form2Example11" className="form-control"
                                        placeholder="Enter your Userid or Email" />
                                    {error.id && <div >{error.id}</div>}
                                    <label className="form-label" htmlFor="form2Example11">Username</label>

                                    <input type="password" onChange={handleChange} name='pass' value={user.password} id="form2Example22" className="form-control"
                                        placeholder="Enter your Password" />
                                    {error.pass && <div >{error.pass}</div>}
                                    <label className="form-label" htmlFor="form2Example22">Password</label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-4"> Login </button>
                                <hr />
                                <span style={{fontWeight:'bold'}}>Don't have an account ? <NavLink to={"/receiver"} style={{ textDecoration:'none'}}>Signup</NavLink></span>
                            </form>  
                               
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ReceiverLogin;







