import React from 'react';

function BloodDonationtype() {
  const accordionContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  };

  const accordionStyle = {
    backgroundColor: '#f0f0f0',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '400px',
  };

  const headingStyle = {
    marginTop: '10px',
    textAlign: 'center',
  };

  const containerStyle = {
    backgroundImage: `url('./pic/pic3.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    paddingTop: '50px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Blood Donation Types</h1>
      <div style={accordionContainerStyle}>
        <div className="accordion" id="accordionExample1" style={accordionStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <span style={{ fontFamily: "Georgia" }}>Packed Red Blood Cells</span>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample1">
              <div className="accordion-body">
                <strong>What is it?</strong> Blood Collected straight from the donor into a blood bag and mixed with an anticoagulant is called as whole blood. This collected whole blood is then centrifuged and red cell, platelets and plasma are separated. The separated Red cells are mixed with a preservative to be called as packed red blood cells.
                <strong>Who can donate?</strong> You need to be 18-65 years old, weight 45kg or more and be fit and healthy.
              </div>
            </div>
          </div>
        </div>

        <div className="accordion" id="accordionExample2" style={accordionStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <span style={{ fontFamily: "Georgia" }}>Plasma</span>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
              <div className="accordion-body">
                <strong>What is it?</strong> The straw-coloured liquid in which red blood cells, white blood cells, and platelets float in is called plasma.Contains special nutrients which can be used to create 18 different type of medical products to treat many different medical conditions. Plasma can be obtained from the collected whole blood after red blood cells and platelets have been separated. Additionally, it can also be collected using an apheresis equipment where other components are returned to the donor. The former is a common method of plasma preparation in our country.
                <strong>Who can donate?</strong> The donation criteria is similar to that of red blood cell. However, for apheresis plasma collection minimum weight is 50 kgs.
              </div>
            </div>
          </div>
        </div>

        <div className="accordion" id="accordionExample3" style={accordionStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <span style={{ fontFamily: "Georgia" }}>Platelet</span>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample3">
              <div className="accordion-body">
                <strong>What is it?</strong> These are cellular elements in blood which wedge together to help to clot and reduce bleeding. Always in high demand, Vital for people with low platelet count, like hematology and cancer patients.
                <strong>Who can donate?</strong> One can donate whole blood from which the blood centre will separate platelets from other components. Criteria similar to whole blood donation apply. Alternatively, one can donate using apheresis equipment where only platelets are collected and rest components are returned back to donate. One need to satisfy whole blood criteria and pre- donation screening which include negative infectious markers and platelet count 1,50,000 per microlitre of blood. Weight should be 50kgs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BloodDonationtype;
