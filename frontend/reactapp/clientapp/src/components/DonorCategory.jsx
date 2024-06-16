
function DonorCategory(props) {

  const{donordata} = props
  
  //table styling
  const tableStyle1  = {
    borderCollapse: 'collapse',
    width: '95%',
    textAlign: 'center',
    margin: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '10px',
  };

  const thTdStyle1 = {
    border: '1px solid #dddddd',
    padding: '8px',
  };

  const thStyle1 = {
    backgroundColor: '#f2f2f2',
  };
    
    return ( 
        <>
           <div style={{ margin: "0 auto", width: "80%" }}>
        {/* <h1 style={{ textAlign: "center" }}>Donors</h1> */}
        <table style={tableStyle1}>
          <thead>
            <tr>
              <th style={{ ...thTdStyle1, ...thStyle1 }}>Name</th>
              <th style={{ ...thTdStyle1, ...thStyle1 }}>Phoneno</th>
              <th style={{ ...thTdStyle1, ...thStyle1 }}>BloodGroup</th>
              <th style={{ ...thTdStyle1, ...thStyle1 }}>City</th>
            </tr>
          </thead>
          <tbody>
            {donordata.map((dd) => (
              <tr>
                <td style={thTdStyle1}>
                  {dd.name}
                </td>
                <td style={thTdStyle1}>
                  {dd.phone}
                </td>
                <td style={thTdStyle1}>
                  {dd.bloodGroup}
                </td>
                <td style={thTdStyle1}>
                  {dd.city}
                </td>
              </tr>
             ))} 
          </tbody>
        </table>
      </div>
        </>
     );
}

export default DonorCategory;