import { useState,useEffect } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import Footer from "../Footer";

function VeiwReceivers() {
    const [veiwreceiver,setveiwreceiver] = useState([])
    const URL ="http://localhost:4000/admin/veiwreceiver"

    useEffect(() =>{
        const fetchdata = async () =>{
            try{
                const response = await axios.get(URL)
                console.log(response.data);
                setveiwreceiver(response.data)
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
        <h1 style={{textAlign:"center"}}>Receivers</h1>
         <div className="row">
            {
                veiwreceiver.map((vr) => {
                      
                  return(
                        <div className="col-4">
                            <div className="card" style={{marginLeft:"20px"}}>
                                <div className="card-body">
            
                                    <h5 className="card-title">Name:{vr.name}</h5>
                                    <h5 className="card-title">Email:{vr.email}</h5>
                                    <h5 className="card-title">Id:{vr.id}</h5>
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

export default VeiwReceivers;