import '../css/style.css'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Contactus = () => {

    const Myswal = withReactContent(Swal)
    const URL = "http://localhost:4000/addcontact"
    const [contact,setcontact] = useState({name:"",email:"",tel:"",query:""})
    const handleform = async (e) =>{
        e.preventDefault()
       
        try{
            const response = await axios.post(URL,contact)
            setcontact({name:"",email:"",tel:"",query:""})
            console.log(response.data);

            Swal.fire({
                title: "Contact Details",
                text: response.data,
                icon: "info"
              });
            
        }
        catch(error){
            console.log("error loading data" + error);
        }
    
    }

    const handlechange =(e)=>{
        setcontact({...contact,[e.target.name]:e.target.value})
    }



     return(
        <>
        <div className="container-wrapper">
       <div className="container">
            <img src={"/pic/pic16.jpg"} alt="Contact" />
            <div className="contact-form">
                <h1>Contact Us</h1>
                <form onSubmit={handleform} method="post">
                    <input type="text"  name="name" onChange={handlechange} placeholder="Your Name" required />
                    <input type="email" name="email" onChange={handlechange} placeholder="Your Email" required />
                    <input type="tel" name="tel" onChange={handlechange} placeholder="Your Phone No" required />
                    <input type="text" name="query" onChange={handlechange} placeholder="Your Query" required />
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
        </div>
        </>
     )
}
export default Contactus

