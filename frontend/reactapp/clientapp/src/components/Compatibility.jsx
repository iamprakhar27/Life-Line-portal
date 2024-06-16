function Compatibility() {
    // const containerStyle = {
    //     margin: '20px',
    //     textAlign: 'center',
    //     padding: '20px',
    //     borderRadius: '10px',
    //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.9)',
    //   };
    
      const tableStyle = {
        borderCollapse: 'collapse',
        width: '80%',
        textAlign: 'center',
        margin: 'auto',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: '10px',
      };
    
      const thTdStyle = {
        border: '1px solid #dddddd',
        padding: '8px',
      };
    
      const thStyle = {
        backgroundColor: '#f2f2f2',
      };
    
    return ( 
        <>
        <div style={{ backgroundImage: 'url(/pic/pic35.jpg)', backgroundSize: 'cover', minHeight: '100vh', padding: '20px' }}>
      {/* <div style={containerStyle}> */}
        <h1 style={{ marginBottom: '20px' }}>Blood Type Compatibility</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...thStyle }}>Blood Type</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Donate Blood To</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Receive Blood From</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={thTdStyle}>A+</td>
            <td style={thTdStyle}>A+ AB+</td>
            <td style={thTdStyle}>A+ A- O+ O-</td>
          </tr>
          <tr>
            <td style={thTdStyle}>O+</td>
            <td style={thTdStyle}>O+ A+ B+ AB+</td>
            <td style={thTdStyle}>O+ O-</td>
          </tr>
          <tr>
            <td style={thTdStyle}>B+</td>
            <td style={thTdStyle}>B+ AB+</td>
            <td style={thTdStyle}>B+ B- O+ O-</td>
          </tr>
          <tr>
            <td style={thTdStyle}>AB+</td>
            <td style={thTdStyle}>AB+</td>
            <td style={thTdStyle}>Everyone</td>
          </tr>
          <tr>
            <td style={thTdStyle}>A-</td>
            <td style={thTdStyle}>A+ A- AB+ AB-</td>
            <td style={thTdStyle}>A- O-</td>
          </tr>
          <tr>
            <td style={thTdStyle}>O-</td>
            <td style={thTdStyle}>Everyone</td>
            <td style={thTdStyle}>O-</td>
          </tr>
          <tr>
            <td style={thTdStyle}>B-</td>
            <td style={thTdStyle}>B+ B- AB+ AB-</td>
            <td style={thTdStyle}>B- O-</td>
          </tr>
          <tr>
            <td style={thTdStyle}>AB-</td>
            <td style={thTdStyle}>AB+ AB-</td>
            <td style={thTdStyle}>AB- A- B- O-</td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* </div> */}
        </>
     );
}

export default Compatibility;