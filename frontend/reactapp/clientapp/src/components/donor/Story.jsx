import DonorHeader from "./DonorHeader";
import Footer from "../Footer"
import axios from "axios"
import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Story() {

    const Myswal = withReactContent(Swal)
    const URL = "http://localhost:4000/donor/yourstory"
    const token_data = localStorage.getItem("Token_key")
    const [story,setstory] = useState({donorid:token_data, title:"", content:""})
    
    const handlesubmit = async(e) =>{
        e.preventDefault()
        try{
            const response =  await axios.post(URL,story)
            setstory(response.data)
            // console.log(response.data);
            Swal.fire({
                title: "Story Shared",
                text: response.data,
                icon: "success"
              });

        }
        catch(error)
        {
            console.log("error loading"+error);
        }
    }
    
    const handlechange = (e) =>{
        setstory({...story,[e.target.name]:e.target.value})
    }

    return (
        <>
            <DonorHeader />
            <h1>share story</h1>
            <form onSubmit={handlesubmit} className="form-container" style={{marginLeft:"100px",marginTop:"80px"}}>
                <h2 style={{textAlign:"center"}}>Share your story </h2><hr/>
                <div>
                    <input onChange={handlechange} type="text" id="title" name="title" placeholder="Enter Title" className="form-control"/>
                    <label htmlFor="title" className="form-label">Title:</label>
                </div>
                <div>
                    <input onChange={handlechange} type="text" id="content" name="content" placeholder="Enter Content Here" className="form-control"/>
                    <label htmlFor="content"className="form-label">Content:</label>
                </div>
                <button type="submit" className="btn btn-secondary mt-3">Submit</button>
            </form>
            <Footer />
        </>
    );
}

export default Story;