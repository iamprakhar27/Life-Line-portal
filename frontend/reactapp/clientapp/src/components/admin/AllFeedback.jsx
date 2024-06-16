import AdminHeader from "./AdminHeader";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AllFeedback() {
    const[userfeedback,setuserfeedback] = useState([])
    const URL = "http://localhost:4000/admin/allfeedbacks"
    const navigate = useNavigate()

    useEffect(() => {
        const token_data = localStorage.getItem("Token_key")
        if(!token_data)
        {
             navigate("/admin_login")
        }

        const fetchData = async () => {
            try
            {
                   const response = await axios.get(URL)
                   console.log(response.data);
                   setuserfeedback(response.data)
            }
            catch(error) 
            {
               console.log("error loading data" + error);
            }
        }
        fetchData()
    })

    return ( 
        <> 
        <AdminHeader/>
        <h1 style={{textAlign:"center"}}> User Feedbacks</h1>
         <div className="row">
            {
                userfeedback.map((uf) => {
                      
                  return(
                        <div className="col-4">
                            <div className="card" style={{marginLeft:"20px"}}>
                                <div className="card-body">
            
                                    <h5 className="card-title">posted by:{uf.name}</h5>
                                    <h5 className="card-title">remarks:{uf.remarks}</h5>
                                    <h5 className="card-title">rating:{uf.rating}</h5>

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

export default AllFeedback;
