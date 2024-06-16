import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Footer from "../Footer";

function AdminHome() {

    const[acname,setAcname] = useState("")
    const navigate=useNavigate()
    useEffect(()=>{
        const token_data = localStorage.getItem("Token_key")
        console.log(`token data is ${token_data}`);
        if(!token_data)
        {
            navigate("/admin_login")
        }

        setAcname(token_data)
      
    })
    return (  
        <>
        <AdminHeader/>
           <h1>hello {acname} </h1>
           
        <Footer/>   
        </>
    );
}

export default AdminHome;