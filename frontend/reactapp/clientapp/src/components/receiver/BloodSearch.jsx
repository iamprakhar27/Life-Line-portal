import ReceiverHeader from "./ReceiverHeader";
import Footer from "../Footer";
import DonorCategory from "../DonorCategory";
import axios from "axios";
import { useState } from "react";

function BloodSearch() {

    const [blood,setblood] = useState("")
    const [city,setcity]  = useState("")
    const [donordata,setdonordata] = useState([])

    const URL = "http://localhost:4000/receiver/allblooddonor"

    const fetchdata =  async () => {
        try{
            console.log(`bloodgroup is ${blood}`);
            console.log(`city is ${city}`);

            const params = {bloodGroup:blood , city:city}

            const response = await axios.get(URL,{params})
            setdonordata(response.data.donor_data)
            console.log(response.data);

        }
        catch(error)
        {
            console.log("error loading data " + error);
        }
    }

    const search = (e) =>{
        e.preventDefault()
        fetchdata();
    }

    return (
        <>
            <ReceiverHeader />
            <form className="d-flex justify-content-end" role="search">
                <input className="form-control me-2" type="search" placeholder="Enter city" value={city} onChange={(e)=>{setcity(e.target.value)}} />
                
                <select className="form-control" name="blood" id="blood" value={blood} onChange={(e)=>{setblood(e.target.value)}}>
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
                <button className="btn btn-outline-success" type="submit" onClick={search}>Search</button>
            </form>
            <DonorCategory donordata={donordata} />
            <Footer />
        </>
    );
}

export default BloodSearch;