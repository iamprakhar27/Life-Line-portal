import DonorHeader from "./DonorHeader"
import Footer from "../Footer"
import { NavLink } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios"

function Appointments() {

    const [donation, setdonation] = useState([])
    const URL = "http://localhost:4000/donor/showappointment"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL)
                console.log(response.data);
                setdonation(response.data)

            }
            catch (error) {
                console.log("error loading" + error);
            }
        }
        fetchData()
    }, [])

    return ( 
        <>
        <DonorHeader/>
        <h1 style={{ textAlign: "center", fontSize: "60px" }}>Appointments</h1>
            <div className="row">
                {
                    donation.map((da) => {
                        return (
                            <div className="col-4">
                                <div className="card bg-body-secondary" >
                                    <div className="card-body" style={{ marginLeft: "20px" }}>

                                        <h5 className="card-title">Date: {da.date}</h5>
                                        <h5 className="card-title">Message: {da.message}</h5>
                                        <h5 className="card-title">Venue: {da.venue}</h5>

                                        <NavLink to="/donationregistration">BookAppointment</NavLink>
                                        
                                    </div>
                                </div>
                            </div>
                        )})
                } 
            </div>
        
        <Footer/>  
        </>
     );
}

export default Appointments;