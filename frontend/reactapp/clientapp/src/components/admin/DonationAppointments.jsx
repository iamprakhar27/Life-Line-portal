import Footer from "../Footer";
import AdminHeader from "./AdminHeader"
import axios from "axios"
import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "../../css/donationappointments.css"

function DonationAppointments() {

    const Myswal = withReactContent(Swal)
    const URL = "http://localhost:4000/admin/donationappointments"
    const [appointment, setappointment] = useState()

    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(URL, appointment)
            setappointment(response.data)
            // console.log(response.data);
            Swal.fire({
                title: "Appointmnet shared",
                text: response.data,
                icon: "success"
            });

        }
        catch (error) {
            console.log("error loading" + error);
        }
    }

    const handlechange = (e) => {
        setappointment({ ...appointment, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AdminHeader />
            <div className="body">
                    <form onSubmit={handlesubmit} className="form-container1">
                        <h2 style={{ textAlign: "center" }}>Book Appointments</h2><hr />

                        <label htmlFor="label" className="form-label1">Date:</label>
                        <input type="date" name="date" id="date" className="form-control1" onChange={handlechange} />

                        <label htmlFor="message" className="form-label1" >Message:</label>
                        <input type="text" name="message" id="message" placeholder="enter message" className="form-control1" onChange={handlechange} />

                        <label htmlFor="venue" className="form-label1">Venue:</label>
                        <input type="text" name="venue" id="venue" placeholder="Enter venue" className="form-control1" onChange={handlechange} />

                        <button type="submit" className="btn1 btn-secondary mt-3">Submit</button>
                    </form>
                    
            </div>
            <Footer />
        </>
    );
}

export default DonationAppointments;