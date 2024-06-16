import Footer from "../Footer";
import AdminHeader from "./AdminHeader"
import axios from "axios"
import { useState,useEffect } from "react";

function AdminInbox() {

    const [allmessages,setallmessages] = useState([])
  const URL = "http://localhost:4000/admin/allmessages"
  
  useEffect(()=>{
    const token_data = localStorage.getItem("Token_key")
    const fetchData = async () =>{

      const params = {
        senderid:token_data
      }
      try{
        const response = await axios.get(URL , {params})
        console.log(response.data);
        setallmessages(response.data)

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
        <AdminHeader/>
         <div style={{ margin: "0 auto", width: "80%" }}>
        <h1 style={{ textAlign: "center" }}>All Messages</h1>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>Sender</th>
              <th style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>Subject</th>
              <th style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {allmessages.map((am) => (
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {am.senderid}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {am.subject}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {am.date}
                </td>
              </tr>
              ))} 
          </tbody>
        </table>
      </div>
         <Footer/>
        </>
     );
}

export default AdminInbox;