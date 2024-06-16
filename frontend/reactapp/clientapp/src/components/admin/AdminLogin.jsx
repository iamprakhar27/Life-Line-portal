import axios from "axios"
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import Navbar from "../Navbar";
import Footer from "../Footer";
import '../../css/admin.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function AdminLogin() {

    const URL = "http://localhost:4000/admin/login"
    const[admin,setadmin] = useState({id:"",pass:""})
    const error_message = {}
    const navigate = useNavigate()
    const [error,seterror] = useState({})

    //client side validation code
    const checkempty = ()=>{
        if(!admin.id){
            error_message.id = "admin id requried"
        }
        if(!admin.pass){
            error_message.pass = "password required"
        }
    }

    const handleform = async (e) => {
        e.preventDefault()  
        try{
            checkempty()
            if(Object.keys(error_message).length > 0){
                seterror(error_message)
            }
            else{
                const response = await axios.post(URL,admin)
                
                console.log(response.data);
                setadmin({id:"",pass:""})

                if(response.data.code === 200)
                {
                    // alert("admin exists")
                    navigate("/admin_home") //defined in index.js
                    localStorage.setItem("Token_key", response.data.token)
                    Swal.fire("Admin Login Successful");

                }
                else if( response.data.code === 404)
                {
                    alert("password does not match")
                }
                else{
                    alert("admin does not exists")
                }
            }  
        }
        catch(error){
            console.log(error);
        }
    }

    const handlechange = (e) => {
        setadmin({...admin,[e.target.name]:e.target.value})
    }
    return (  
        <>
        <Navbar/>
           <div className="container3" >
                    <div className="form-container">
                    <form onSubmit={handleform}>
                        <h1>Admin Login</h1>
                        <hr/>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Username</label>
                                <input placeholder="Enter your Username" type="text" class="form-control" id="exampleInputEmail1" name="id" onChange={handlechange}/>
                                {error.id && <div >{error.id}</div>}
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input placeholder="Enter your Password" type="password" class="form-control" id="exampleInputPassword1" name="pass" onChange={handlechange}/>
                                {error.pass && <div >{error.pass}</div>}
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
          </div>
          <Footer/>
        </>
    );
}

export default AdminLogin;