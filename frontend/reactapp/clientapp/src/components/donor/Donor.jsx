import { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { NavLink } from "react-router-dom";
import "../../css/donor.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Donor() {
    const URL = "http://localhost:4000/Donor";
    const Myswal = withReactContent(Swal)

    const [user, setUser] = useState({id: '', password: '', name: '', email: '', phone: '', gender: '', age: '', bloodGroup: '', city: ''});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(URL, user);
            setUser({id: '', password: '', name: '', email: '', phone: '', gender: '', age: '', bloodGroup: '', city: ''});
            // console.log(response.data);
            Swal.fire({
                title: "Registration successfull",
                text: response.data,
                icon: "success"
              });
        }
        catch (err) {
            console.log('Error:', err.response.data); // Log the error response from the server
        }
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Navbar />
            <div className="main3">
            <div className="container6">
                <h1>Donor Registration</h1><hr/>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mt-2">
                                <label htmlFor="id">ID:</label>
                                <input onChange={handleChange} type="text" className="form-control" id="id" name="id" placeholder="Enter ID" />
                            </div>
                         </div>    
                            <div className="col-md-6">
                            <div className="form-group mt-2">
                                <label htmlFor="password">Password:</label>
                                <input onChange={handleChange} type="password" className="form-control" id="password" name="password" placeholder="Enter password" />
                           </div>
                           </div>   
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mt-2">
                                <label htmlFor="name">Name:</label>
                                <input onChange={handleChange} type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mt-2">
                                <label htmlFor="phone">Phone:</label>
                                <input onChange={handleChange} type="tel" className="form-control" id="phone" name="phone" placeholder="Enter phone number" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group mt-2">
                        <label htmlFor="email">Email:</label>
                        <input onChange={handleChange} type="email" className="form-control" id="email" name="email" placeholder="Enter your email" />   
                    </div>

                    <div className="form-group mt-2">
                            <label>Gender:</label>
                            <div className="form-check form-check-inline">
                                <input onChange={handleChange} className="form-check-input" type="radio" name="gender" id="male" value="male" />
                                <label className="form-check-label" htmlFor="male">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input onChange={handleChange} className="form-check-input" type="radio" name="gender" id="female" value="female" />
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                    </div> 

                    <div className="form-group mt-2">
                        <label htmlFor="age">Age:</label>
                        <input onChange={handleChange} type="number" className="form-control" id="age" name="age" placeholder="Enter your age" />
                    </div>

                    <div className="row">
                            <div className="col-md-6">
                            <div className="form-group mt-2">
                                <label htmlFor="bloodGroup">Blood Group:</label>
                                <select className="form-control" onChange={handleChange} name="bloodGroup" id="bloodGroup">
                                    <option value="">Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>    
                            </div>

                            <div className="col-md-6">
                            <div className="form-group mt-2">
                                <label htmlFor="city">City:</label>
                                <select onChange={handleChange} className="form-control" name="city" id="city">
                                    <option value="">Select City</option>
                                    <option value="agra">Agra</option>
                                    <option value="allahabad">Allahabad</option>
                                    <option value="lucknow">Lucknow</option>
                                    <option value="kanpur">Kanpur</option>
                                    <option value="varanasi">Varanasi</option>
                                    <option value="ghaziabad">Ghaziabad</option>
                                    <option value="meerut">Meerut</option>
                                    <option value="noida">Noida</option>
                                    <option value="bareilly">Bareilly</option>
                                    <option value="aligarh">Aligarh</option>
                                </select>
                            </div>    
                            </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-4 mb-4 bg-info">Submit</button>
                      <hr />
                    <span >Already have an account ? <NavLink to={"/donor_login"} style={{ textDecoration:'none'}}>Login</NavLink></span>

                </form >
            </div >
            </div>    
        <Footer />
        </>
    );
}

export default Donor;









