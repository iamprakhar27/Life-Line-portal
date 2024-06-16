import AdminHeader from "./AdminHeader";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function AllContact() {
  const [usercontact, setusercontact] = useState([])
  const URL = "http://localhost:4000/admin/allcontacts"
  const navigate = useNavigate()

  useEffect(() => {
    const token_data = localStorage.getItem("Token_key")
    if (!token_data) {
      navigate("/admin_login")
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(URL)
        console.log(response.data);
        setusercontact(response.data)

      }
      catch (error) {
        console.log("error loading data" + error);
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <AdminHeader />
      <div style={{ margin: "0 auto", width: "80%" }}>
        <h1 style={{ textAlign: "center" }}>User Contact</h1>
        <table style={{ borderCollapse: "collapse", width: "80%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>Name</th>
              <th style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>Email</th>
              <th style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>Query</th>
            </tr>
          </thead>
          <tbody>
            {usercontact.map((uc) => (
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {uc.name}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {uc.email}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {uc.query}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default AllContact;