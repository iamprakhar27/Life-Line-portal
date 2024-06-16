import Footer from "../Footer";
import { useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import DonorHeader from "./DonorHeader";
import "../../css/editprofile.css"

function DonorHome() {
    const URL = "http://localhost:4000/donor/profile"
    const [profile, setProfile] = useState({ name: "", email: "", phone: "",city:"",age:"",bloodGroup:"" })

    const [acname, setAcName] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const token_data = localStorage.getItem("Token_key")

        console.log(`token data is  ${token_data}`);

        if (!token_data) {
            navigate('/donor_login')
        }
        setAcName(token_data)
        fetchData()

    }, [])

    async function fetchData() {
        const token_data = localStorage.getItem("Token_key")
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

    return (<>
        <DonorHeader />
        <h1 style={{fontFamily:"georgia"}}>Welcome {acname}</h1>
        <div className="main-body">
            <div className="container01">
                <div className="row-x">
                    <div className="col-4-profile">
                        <h2 className="profile-id"><i className="fas fa-user-circle"></i> {profile.id}</h2>
                        <NavLink to="/edituser" className="edit-link"><i className="fas fa-edit"></i> Edit Profile</NavLink>

                    </div>
                    <div className="col-8-profile">

                        <hr />
                        <ul>
                            <li><h2 className="profile-details"><i className="fas fa-user-circle"></i>  Name:  {profile.name}</h2></li>
                            <li><h2 className="profile-details"><i className="fa fa-envelope"></i>  Email:  {profile.email}</h2></li>
                            <li><h2 className="profile-details"><i className="fa fa-phone"></i>  PhoneNo:  {profile.phone}</h2></li>
                            <li><h2 className="profile-details"><i className="fas fa-city"></i>  City:  {profile.city}</h2></li>
                            <li><h2 className="profile-details">Age:  {profile.age}</h2></li>
                            <li><h2 className="profile-details">BloodGroup:  {profile.bloodGroup}</h2></li>
                        </ul>
                        <hr />



                    </div>

                </div>

            </div>

        </div>


        <Footer />

    </>
    );
}

export default DonorHome;