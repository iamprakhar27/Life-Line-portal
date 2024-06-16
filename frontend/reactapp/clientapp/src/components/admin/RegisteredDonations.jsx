import axios from "axios"
import { useEffect, useState } from "react";

function RegisteredDonations(props) {
     
    const {donordata} = props
    const [donationdata, setdonationdata] = useState([])
    const [date,setdate] = useState("")
    const [unit,setunit] = useState("")
    const [id,setid] = useState("")

    const URL = "http://localhost:4000/admin/registeredblooddonors"

    const URL1 = "http://localhost:4000/admin/updatedbloodregistration"
 
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(URL)
    //             console.log(response.data);
    //             setdonationdata(response.data)
    //         }
    //         catch (error) {
    //             console.log("error loading data" + error);
    //         }
    //     }
    //     fetchData()
    // }, [])

    const handledate = (e, updateid) => {
        const { value } = e.target
        setdate(value)
        setid(updateid)
        
    }

    const handleunit = (e, updateid) => {
        const { value } = e.target
        setunit(value)
        setid(updateid)
        
    }

    const handleupdate = async () => {
        try{
            const response = await axios.post(URL1, {id,date})
            const response1 = await axios.post(URL1, {id,unit})
            console.log(response.data);
            console.log(response1.data);
        }
        catch(error)
        {
            console.log("error loading" + error);
        }
    }

    return (
        <>
            <div style={{ margin: "0 auto", width: "80%" }}>
                <table style={{ borderCollapse: "collapse", width: "80%" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>Name</th>
                            <th style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>Email</th>
                            <th style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>Phoneno</th>
                            <th style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>BloodGroup</th>
                            <th style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>Unit</th>
                            <th style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            donordata.map((rd) => {
                                return (
                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{rd.name}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{rd.email}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{rd.phone}</td>
                                        <td style={{ border: "1px solid black", padding: "8px" }}>{rd.blood}</td>

                                        <td style={{ border: "1px solid black", padding: "8px" }}>
                                            <input className="form-control" type="num" placeholder="blood unit" name="unit"  onChange={(e) => handleunit(e,rd._id)} />
                                        </td>

                                        <td style={{ border: "1px solid black", padding: "8px" }}>
                                            <input className="form-control" type="date" name="date" onChange={(e) => handledate(e,rd._id)} />
                                        </td>

                                        <td style={{ border: "1px solid black", padding: "8px" }}>
                                            <button className="btn btn-outline-success" type="update" onClick={handleupdate}>Update</button>
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default RegisteredDonations;