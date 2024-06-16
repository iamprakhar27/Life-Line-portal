import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import Navbar from "../Navbar";
import Footer from "../Footer";
import { NavLink } from "react-router-dom";
import '../../css/donorlogin.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function DonorLogin() {
  const URL = "http://localhost:4000/donor/login"
  const [user, setUser] = useState({ id: '', password: '' })
  const error_message = {}
  const navigate = useNavigate()
  const [error, seterror] = useState({})

  //client side validation code
  const checkempty = () => {
    if (!user.id) {
      error_message.id = "Donor id requried"
    }
    if (!user.password) {
      error_message.password = "password required"
    }
  }

  const handelForm = async (e) => {
    e.preventDefault()

    try {
      checkempty()
      if (Object.keys(error_message).length > 0) {
        seterror(error_message)
      }
      else {
        const response = await axios.post(URL, user)

        console.log(response.data);
        setUser({ id: '', password: '' })

        if (response.data.code === 200) {
          // alert("admin exists")
          navigate("/Donor_home") //defined in index.js
          localStorage.setItem("Token_key", response.data.token)
          Swal.fire("Login Successful");
        }
        else if (response.data.code === 404) {
          alert("password does not match")
        }

        else {
          alert("donor does not exits")
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
      <div className="main1">
        <div className="container4">
          <div>
            <h2>Donating blood is a selfless act that can save a life.</h2>
          </div>
          <div>
            <div className="card-body">
              <form onSubmit={handelForm}>
                <h1>Donor Login</h1> <hr />
                <div className="form-outline mb-3 mt-4">
                  <input type="text" onChange={handleChange} value={user.id} name='id' id="form2Example11" className="form-control "
                    placeholder="Enter your UserId or Email " />
                    {error.id && <div >{error.id}</div>}
                  <label className="form-label" htmlFor="form2Example11">Username</label>

                  <input type="password" onChange={handleChange} name='password' value={user.password} id="form2Example22" className="form-control"
                    placeholder="Enter your Password" />
                     {error.password && <div >{error.password}</div>}
                  <label className="form-label" htmlFor="form2Example22">Password</label>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">  Login </button>
                <hr />
                <span >Don't have an account ? <NavLink to={"/donor"} style={{ textDecoration:'none'}}>Signup</NavLink></span>


              </form>
            </div>
          </div>

        </div>
      </div>







      <Footer />
    </>
  );
}

export default DonorLogin;














