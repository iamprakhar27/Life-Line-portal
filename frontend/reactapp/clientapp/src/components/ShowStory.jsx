import axios from "axios"
import { useState, useEffect } from "react";

function ShowStory() {
    const [share, setshare] = useState([])
    const URL = "http://localhost:4000/showstory"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL)
                console.log(response.data);
                setshare(response.data)

            }
            catch (error) {
                console.log("error loading" + error);
            }
        }
        fetchData()
    }, [])

    return (
        <>
        <div style={{height:"90vh"  ,background: "linear-gradient(to bottom, #80CBC4, #FFE0B2)"}}>
            <h1 style={{ textAlign: "center", fontSize: "60px" }}>Stories by Donor</h1>
            <div className="row">
                {
                    share.map((sh) => {
                        return (
                            <div className="col-4">
                                <div className="card bg-body-secondary" style={{ marginLeft: "50px" }}>
                                    <div className="card-body" style={{ marginLeft: "20px" }}>

                                        <h5 className="card-title">title: {sh.title}</h5>
                                        <h5 className="card-title">content: {sh.content}</h5>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    );
}

export default ShowStory;