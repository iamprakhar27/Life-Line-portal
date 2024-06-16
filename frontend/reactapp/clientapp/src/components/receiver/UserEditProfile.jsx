import ReceiverHeader from "./ReceiverHeader"
import Footer from "../Footer";
import { useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios"


function UserEditProfile() {
    const URL = "http://localhost:4000/receiver/profile"
    const EDIT_URL = "http://localhost:4000/receiver/edit_profile"
    const[editprofile,seteditprofile] = useState({name:"",email:"",phone:""})

     
    const [acname,setAcName]=useState("")
    const navigate=useNavigate()
    const token_data=localStorage.getItem("Token_key")

    useEffect(()=>{
        console.log(`token data is ${token_data}`);
        if (!token_data)
        {
            navigate("/receiver_login")
        }
        setAcName(token_data)
        fetchData()
    },[])
    
    async function fetchData(){
        const params = {
            id : token_data
        }
        try 
        {
            const response = await axios.get(URL ,{params})
            console.log(response.data);
            seteditprofile(response.data)
        }
        catch(err){
            console.log("err"+err);
        }

    }

     const handlechange = (e) => {
        seteditprofile({...editprofile,[e.target.name]:e.target.value})
     }

     const handleform = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post(EDIT_URL, editprofile)
            if(response.data.acknowledged)
            alert("profile updated successfully")
        }
        catch(error)
        {
             console.log("error loading" + error);
        }
     }

    return ( 
        <>
        <ReceiverHeader/>
        <h1>hello {acname}</h1>
        <form onSubmit={handleform}>
        <div className="card bg-warning" style={{margin:"12%",padding:"2%",width:"50%"}}>
            <div className="card-body">
                <h1 className="card-title">your name: <input type="text" name="name" value={editprofile.name} onChange={handlechange} className="form-control"></input></h1>
                <h1 className="card-title">your email:<input type="text" name="email" value={editprofile.email} onChange={handlechange} className="form-control"></input></h1>
                <h1 className="card-title">your phone: <input type="text" name="phone" value={editprofile.phone} onChange={handlechange} className="form-control"></input></h1>                
            </div>
            <button className="bg-success" style={{width:"100px",marginLeft:"auto",marginRight:"auto"}}>Editprofile</button>

        </div>
        </form>
        <Footer/>
        </>
     );
}

export default UserEditProfile;