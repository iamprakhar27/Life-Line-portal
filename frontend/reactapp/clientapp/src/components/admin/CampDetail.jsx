import { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import "../../css/camp.css"

function CampDetail() {
  const URL = "http://localhost:4000/admin/campdetail"
  const navigate = useNavigate()

  // useEffect(()=>{
  //   const token_data = localStorage.getItem("Token_key")
  //       if(!token_data)
  //       {
  //            navigate("/admin_login")
  //       }
  //       else{
  //         localStorage.removeItem("Token_key")
  //         navigate("/admin_login")
  //         }
  //     })  

  const [camp, setcamp] = useState({ event_name: "", event_venue: "", event_date: "", event_description: "" })

  const handleform = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(URL, camp)
      setcamp({ event_name: "", event_venue: "", event_date: "", event_description: "" })
      console.log(response.data);

    }
    catch (error) {
      console.log("error loading data" + error);
    }
  }
  const handlechange = (e) => {
    setcamp({ ...camp, [e.target.name]: e.target.value })
  }
  return (
    <>
      <AdminHeader />
      <div className="main5">
      <div className="container8">
        <h1>Add New Event</h1>
        <form onSubmit={handleform}>
          <div className="form-group">
            <input type="text" placeholder="Enter Event Name" id="eventName" name="event_name" onChange={handlechange} />
            <label htmlFor="eventName">Event Name</label>
          </div>

          <div className="form-group">
            <input type="text" placeholder="Enter Event Venue" id="eventVenue" name="event_venue" onChange={handlechange} />
            <label htmlFor="eventVenue">Event Venue</label>
          </div>

          <div className="form-group">
            <input type="date" id="eventDate" name="event_date" onChange={handlechange} />
            <label htmlFor="eventDate">Event Date</label>
          </div>

          <div className="form-group">
            <input type="text" placeholder="Add Event Description" id="eventDescription" name="event_description" onChange={handlechange} />
            <label htmlFor="eventDescription">Event Description</label>
          </div>
          <button type="submit">Add Event</button>

        </form>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default CampDetail;



