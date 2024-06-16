import DonorHeader from "./DonorHeader"
import Footer from "../Footer"
import axios from "axios"
import { useState,useEffect} from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function DonationRegister() {

    const Myswal = withReactContent(Swal)
    const URL = "http://localhost:4000/donor/donorbloodregister"
    const Register_URL = "http://localhost:4000/donor/registerblooddonation"

    const token_data=localStorage.getItem("Token_key")
    const [donorblood, setdonorblood] = useState({ senderid:token_data, name: "", email: "", phone: "", age: "", blood: ""})
    
    
    useEffect(()=>{
        async function fetchData(){
            const params = {
                id:token_data
            }
            try{
                const response = await axios.get(Register_URL,{params})
                console.log(response.data);
                setdonorblood(response.data)
            }
            catch(error)
            {
                console.log("error loading" + error);
            }
        }
        fetchData()
    },[])

    const handleform = async (e) => {
        e.preventDefault()
        try {
            const senderid = localStorage.getItem("Token_key")
            const userdata = {...donorblood,senderid}
            
            const response = await axios.post(URL, userdata)
            setdonorblood(response.data )
            // console.log(response.data);
            Swal.fire({
                title: "Appointment Booked",
                text: response.data,
                icon: "success"
              });

            const responses =  await axios.get(Register_URL,donorblood)
            setdonorblood(responses.data)

        }
        catch (error) {
            console.log("error loading" + error);
        }
    }

    const handlechange = (e) => {
        setdonorblood({...donorblood,[e.target.name]:e.target.value})

    }
    return (
        <>
            <DonorHeader />
            <form onSubmit={handleform} className="form-container" style={{ marginLeft: "35%", marginTop: "50px", height: "500px" }}>
                <h2 style={{ textAlign: "center" }}>Book Appointments</h2><hr />
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group mt-2">
                            <label htmlFor="name">Name:</label>
                            <input value={donorblood.name} onChange={handlechange} type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group mt-2">
                            <label htmlFor="phone">Phone:</label>
                            <input value={donorblood.phone} onChange={handlechange} type="tel" className="form-control" id="phone" name="phone" placeholder="Enter phone number" />
                        </div>
                    </div>
                </div>

                <div className="form-group mt-2">
                    <label htmlFor="email">Email:</label>
                    <input value={donorblood.email} onChange={handlechange} type="email" className="form-control" id="email" name="email" placeholder="Enter your email" />
                </div>

                <div className="form-group mt-2">
                    <label htmlFor="age">Age:</label>
                    <input value={donorblood.age} onChange={handlechange} type="number" className="form-control" id="age" name="age" placeholder="Enter your age" />
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group mt-2">
                            <label htmlFor="bloodGroup">Blood Group:</label>
                            <select onChange={handlechange} className="form-control" name="blood" id="bloodGroup" value={donorblood.bloodGroup}>
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
                </div>

                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form >
            <Footer />
        </>
    );
}

export default DonationRegister;