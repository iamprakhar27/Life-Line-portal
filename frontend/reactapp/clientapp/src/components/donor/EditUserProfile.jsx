import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import DonorHeader from "./DonorHeader";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "../../css/editprofile.css"



function EditUserProfile() {
    const URL = "http://localhost:4000/donor/profile"
    const Edit_URL = "http://localhost:4000/donor/editprofile"
    const [profile, setProfile] = useState({ name: "", email: "", phone: "" ,city:"",age:""})

    const [acname, setAcName] = useState("")
    const navigate = useNavigate()
    const token_data = localStorage.getItem("Token_key")

    useEffect(() => {
        console.log(`token data is  ${token_data}`);
        if (!token_data) // if no value in token data  it means user has not login
        {
            navigate('/donor_login')
        }
        setAcName(token_data)
        fetchData()

    }, [])

    async function fetchData() {
        const params = {
            id: token_data
        }
        try {
            const response = await axios.get(URL, { params })
            console.log(response.data);
            setProfile(response.data)
        }
        catch (err) {
            console.log("err" + err);
        }

    }

    const handlechange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value })
    }

    const handleform = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(Edit_URL, profile)
            if (response.data.acknowledged)
                // alert("profile updated successfuly")         
                Swal.fire({
                    title: "Profile updated successfully",
                    text: response.send,
                    icon: "success"
                });
        }
        catch (error) {
            console.log("errror loading" + error);
        }
    }

    return (<>
        <DonorHeader />
        <h1 style={{fontFamily:"georgia"}}>Welcome {acname}</h1>
        <form onSubmit={handleform}>
            <div className="main-body">
                <div className="container01">
                    <div className="row-x">
                        <div className="col-4-profile">
                            <h2 className="profile-id"><i className="fas fa-user-circle"></i> {profile.id}</h2>
                        </div>
                        <div className="col-8-profile ">
                            <hr />
                            <ul>
                                <li>
                                     <div class="input-group mb-2 input-font">
                                    <span class="input-group-text" id="basic-addon2"><i className="fas fa-user-circle"></i> Name:</span>
                                    <input type="text" class="form-control" name="name" value={profile.name} onChange={handlechange} />
                                     </div>
                                </li>
                                <li>
                                     <div class="input-group mb-2 input-font">
                                    <span class="input-group-text" id="basic-addon2"><i className="fa fa-envelope"></i> Email:</span>
                                    <input type="email" class="form-control" name="email" value={profile.email} onChange={handlechange} />
                                     </div>
                                </li>
                                 <li>
                                     <div class="input-group mb-2 input-font">
                                    <span class="input-group-text" id="basic-addon2"><i className="fa fa-phone"></i> PhoneNo:</span>
                                    <input type="tel" class="form-control" name="name" value={profile.phone} onChange={handlechange} />
                                     </div>
                                </li> 
                                <li>
                                     <div class="input-group mb-2 input-font">
                                    <span class="input-group-text" id="basic-addon2"><i className="fas fa-city"></i> City:</span>
                                    <input type="city" class="form-control" name="city" value={profile.city} onChange={handlechange} />
                                     </div>
                                </li>
                                <li>
                                     <div class="input-group input-font">
                                    <span class="input-group-text" id="basic-addon2">Age</span>
                                    <input type="number" class="form-control" name="age" value={profile.age} onChange={handlechange} />
                                     </div>
                                </li>
                               
                            </ul>
                            <hr />
                            <button className="btn btn-success bg-success" >EditProfile</button>

                        </div>


                    </div>
                </div>
            </div>

        </form>
        <Footer />

    </>
    );
}

export default EditUserProfile;