import Footer from "../Footer";
import AdminHeader from "./AdminHeader";
import RegisteredDonations from "./RegisteredDonations";
import axios from "axios";
import { useState } from "react";

function Appoint_DonorDetails() {

    const [phone,setphone] = useState("")
    const [donordata,setdonordata] = useState([])
    const URL = "http://localhost:4000/admin/searchfordonation"

    const fetchData = async() => {
        try{
            console.log(`phone no is ${phone}`);
            const params = {phone:phone}

            const response =  await axios.get(URL,{params})
            setdonordata(response.data.donor_data)
            console.log(response.data);

        }
        catch(error)
        {
            console.log("error loading" + error);
        }
    }

    const search = (e) => {
        e.preventDefault()
        fetchData()
    }
    return (
        <>
            <AdminHeader />
            <h1>this is donor Appointmentsdetails</h1>
            <div>
                <label htmlFor="search" className="form-label">Search Donors:</label>
                <input className="form-control me-2" type="search" placeholder="Enter donor Phone number" value={phone} onChange={(e) =>{setphone(e.target.value)}} />
                <button className="btn btn-outline-success" type="submit" onClick={search}>Search</button>
            </div>
            <RegisteredDonations donordata={donordata}/>
            <Footer />
        </>
    );
}

export default Appoint_DonorDetails;