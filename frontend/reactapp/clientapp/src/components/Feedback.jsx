import "../css/feedback.css"
import { useState } from 'react'
import axios from "axios";
import ReceiverHeader from "./receiver/ReceiverHeader";
import Footer from "./Footer";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Feedback = () => {

   const URL = "http://localhost:4000/addfeedback"
   
  const [feedback,setfeedack] = useState({name:"",email:"",remarks:"",rating:""})
  const handleform = async (e) => {
    e.preventDefault()

    try{
      const response = await axios.post(URL,feedback)
      setfeedack({name:"",email:"",remarks:"",rating:""})
      // console.log(response.data);
      Swal.fire("response.data");
    }
    catch(error){
      console.log("error loading data" + error);
    }
  }

    const handlechange = (e) => {
      setfeedack({...feedback,[e.target.name]:e.target.value})
    }

     return(
        <>
        <ReceiverHeader/>
          <div className="container1">
          <div className="img2">
            <img src={"/pic/pic22.jpg"} alt=""  style={{ width:"500px",height:"400px"}}/>
          </div>
          <div  className="feedbackform" style={{width:"40%",height:"50%"}}>
            <form onSubmit={handleform}>
                 <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName1" name = "name" onChange={handlechange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name="email" onChange={handlechange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputRemarks" className="form-label">Remarks</label>
                    <input type="remarks" className="form-control" id="exampleInputRemarks1" name="remarks" onChange={handlechange}/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputRating" className="form-label">Ratings</label>
                <select className="form-select" name="rating" onChange={handlechange}>
                        <option selected>Please rate us!</option>
                        <option value="Good">Good</option>
                        <option value="Better">Better</option>
                        <option value="Best">Best</option>
                        <option value="Excellent">Excellent</option>
                </select>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
             </form>
          </div>
          </div>
          <Footer/>
        </>
     )
}
export default Feedback