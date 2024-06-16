import { useState,useEffect } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import Footer from "../Footer";

function VeiwDonors() {

    const [veiwdonor,setviewdonor] = useState([])
    const URL = "http://localhost:4000/admin/veiwdonor"

    useEffect(()=>{
        const fetchdata = async () =>{
            try{
                const response = await axios.get(URL)
                console.log(response.data);
                setviewdonor(response.data)

            }
            catch(error)
            {
                console.log("error loading" + error);
            }
        }
        fetchdata()
    },[])

    return ( 
        <>
        <AdminHeader/>
        <h1 style={{textAlign:"center"}}>Donors</h1>
         <div className="row">
            {
                veiwdonor.map((vd) => {
                      
                  return(
                        <div className="col-4">
                            <div className="card" style={{marginLeft:"20px"}}>
                                <div className="card-body">
            
                                    <h5 className="card-title">Name:{vd.name}</h5>
                                    <h5 className="card-title">Email:{vd.email}</h5>
                                    <h5 className="card-title">Id:{vd.id}</h5>
                                    <h5 className="card-title">BloodGroup:{vd.bloodGroup}</h5>
                                </div>       
                            </div>        
                        </div>
                    )
                })
            }
         </div>
        <Footer/>
        </>
     );
}

export default VeiwDonors;