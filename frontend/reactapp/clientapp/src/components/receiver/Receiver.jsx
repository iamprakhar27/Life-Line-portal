import axios from 'axios'
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../css/receiver.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { NavLink } from 'react-router-dom';
import { useState } from "react";

function Receiver() {
  const URL = "http://localhost:4000/Receiver"
  const Myswal = withReactContent(Swal)

  const [user, setUser] = useState({id: '', password: '', name: '', email: '', phone: ''})

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handelForm = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(URL, user)
      // console.log(response.data);
      setUser({ id: '', password: '', name: '', email: '', phone: '' })

      Swal.fire({
        title: "Registration successfull",
        text: response.data,
        icon: "success"
      });
    }
    catch (err) {
      console.log('err' + err);
    }
  }

  return (
    <>
      <Navbar />
      <div className='main4'>

        <div className='container7'>
          <h1>Receiver Registration</h1><hr />
          
            <form onSubmit={handelForm}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group mt-2">
                      <label htmlfor="id">ID:</label>
                      <input type="text" placeholder="Enter ID" class="form-control" id="id" name="id" onChange={handleChange} required />
                  </div>
              </div>
                <div className="col-md-6">
                  <div className="form-group mt-2">
                    <label htmlfor="password">Password:</label>
                    <input type="password" placeholder="Enter Password" class="form-control" id="password" name="password" onChange={handleChange} required />
                  </div>
                </div>
            </div>
              <div class="form-group">
                <label htmlfor="name">Name:</label>
                <input type="text" placeholder="Enter Your Name" class="form-control" id="name" name="name" onChange={handleChange} required />
              </div>
              <div class="form-group">
                <label htmlfor="email">Email:</label>
                <input type="email" placeholder="Enter your Email" class="form-control" id="email" name="email" onChange={handleChange} required />
              </div>

              <div class="form-group">
                <label htmlfor="phone">Phone:</label>
                <input type="text" placeholder="Enter your PhoneNo" class="form-control" id="phone" name="phone" onChange={handleChange} required />
              </div>
              <button type="submit" class="btn btn-primary mt-4 ">Submit</button>
              <hr />
              <span >Already have an account ? <NavLink to={"/receiver_login"} style={{ textDecoration:'none'}}>Login</NavLink></span>


            </form>
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Receiver;