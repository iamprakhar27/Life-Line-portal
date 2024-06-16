import Footer from "../Footer";
import ReceiverHeader from "./ReceiverHeader";
import { useState } from "react";
import axios from "axios";

function ReceiverCompose() {

    const URL = "http://localhost:4000/receiver/compose"
    const token_data = localStorage.getItem("Token_key")
    const [msg, setmsg] = useState({ senderid: token_data, id: "", subject: "", message: "" })

    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(URL, msg)
            setmsg({ id: "", subject: "", message: "" })
            console.log(response.data);

        }
        catch (error) {
            console.log("error loading" + error);
        }
    }

    const handleChange = (e) => {
        setmsg({ ...msg, [e.target.name]: e.target.value })
    }


    return (
        <>
            <ReceiverHeader />
            <div style={{ maxWidth: "400px", margin: "0 auto;" }}>

                <h2 style={{ textAlign: "center;" }}>Compose</h2>

                <form onSubmit={handlesubmit} style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px;" }}>
                    <div style={{ marginBottom: "10px;" }}>
                        <label htmlfor="id" style={{ display: "block", marginBottom: "5px;" }}>ID:</label>
                        <input type="text" id="id" name="id" onChange={handleChange} style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px;" }} />
                    </div>
                    <div style={{ marginBottom: "10px;" }}>
                        <label htmlfor="subject" style={{ display: "block", marginBottom: "5px;" }}>Subject:</label>
                        <input type="text" id="subject" name="subject" onChange={handleChange} style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px;" }} />
                    </div>
                    <div style={{ marginBottom: "10px;" }}>
                        <label htmlfor="message" style={{ display: "block", marginBottom: "5px;" }}>Message:</label>
                        <input type="text" id="message" name="message" onChange={handleChange} style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px;" }} />
                    </div>
                    <button type="submit" style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", float: "right;" }}>Send</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default ReceiverCompose;