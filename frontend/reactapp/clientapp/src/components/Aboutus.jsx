const Aboutus = () => {
   const pageStyle = {
      backgroundImage: 'url("./pic/pic5.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', 
      padding: '50px', 
    };
  
    const contentStyle = {
      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      padding: '20px',
      borderRadius: '10px',
    };
     return(
        <>
        <div className="container-fluid" style={pageStyle}>
      <div className="row justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="col-md-6" style={contentStyle}>
          <h1 className="mb-4" style={{fontFamily:"Georgia"}}>Who We Are?</h1> <hr/>
          <p style={{fontSize:"20px",fontFamily:"oblique"}}><strong>Life Line Portal</strong> is a vital online platform connecting blood donors with those in need of blood transfusions. With its user-friendly interface, individuals can easily register as donors, schedule donations, and find nearby donation centers. Those requiring blood can also access the portal to search for compatible donors and arrange for transfusions. By facilitating these critical connections, Life Line Portal plays a crucial role in saving lives and promoting community health. With features like real-time notifications and secure data management, it ensures a seamless and efficient process for both donors and recipients, making it a lifeline for those in urgent need of blood.</p>
        </div>
      </div>
    </div>
        </>
     )
}
export default Aboutus