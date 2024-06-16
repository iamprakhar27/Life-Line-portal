import { useEffect, useState } from "react";
import DonorCategory from "./DonorCategory";
import axios from "axios"
import "../css/searchdonor.css"

function SearchDonors() {

    const [bgroup, setbg] = useState("")
    const [city, setcity] = useState("")
    const [donordata, setdonordata] = useState([])

    const URL = "http://localhost:4000/allusers"

    useEffect(() => {
        const fetchdata = async () => {
            try {
                console.log(`bloodgroup is ${bgroup}`);
                console.log(`city is ${city}`);

                const params = { bloodGroup: bgroup, city: city }

                const response = await axios.get(URL, { params })
                setdonordata(response.data.donor_data)
                console.log(response.data);

            }
            catch (error) {
                console.log("error loading" + error);
            }
        }
        fetchdata()

    }, [bgroup, city])

    return (
        <>
        <div className="main6">
            <h1>Search Blood Donors NearBy</h1>

            <div className="container9 ">
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="Search By Bloodgroup">Search By Bloodgroup</label>
                        <input type="search" value={donordata.bgroup} placeholder="Search" onChange={(e) => { setbg(e.target.value) }} />
                    </div>

                    <div className="col-6">
                        <label htmlFor="Search By City">Search By City</label>
                        <input type="search" value={donordata.city} placeholder="Search" onChange={(e) => { setcity(e.target.value) }} />
                    </div>
                </div>
            </div>
            
            <DonorCategory donordata={donordata} />
        </div>
        </>
    );
}

export default SearchDonors;