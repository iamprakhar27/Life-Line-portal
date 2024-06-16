import '../css/events.css'
import { useState,useEffect } from "react";
import axios from "axios";

function UpcomingEvents() {
    const [event,setevent] = useState([])
    const URL = "http://localhost:4000/allevents"
    
    useEffect(() => {
        const fetchData = async () => {
            try
            {
                const response = await axios.get(URL)
                console.log(response.data);
                setevent(response.data)

            }
            catch(error)
            {
                console.log("error loading" + error);
            }
        }
        fetchData()
    },[])
    return ( 
    <>
     <div className='container2'>
    <h1 style={{textAlign:"center",fontSize:"60px",color:"white"}}>Upcoming Events</h1>
         <div className="row">
            {
                event.map((ev) => {     
                  return(
                        <div className="col-4">
                            <div className="card bg-body-secondary" >
                                <div className="card-body" style={{marginLeft:"20px"}}>
            
                                    <h5 className="card-title">event_name: {ev.event_name}</h5>
                                    <h5 className="card-title">event_venue: {ev.event_venue}</h5>
                                    <h5 className="card-title">event_date: {ev.event_date}</h5>
                                    <h5 className="card-title">event_description: {ev.event_description}</h5>
                                </div>       
                            </div>        
                        </div>
                   )
                })
            } 
         </div>
         </div>
        
    </> 
    );
}

export default UpcomingEvents;