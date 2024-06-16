import '../css/commonDisease.css';

function CommonDisease() {
    return (
        <>  <div className='main'>
            <h1 style={{marginTop:"20px",fontFamily:"Georgia bold",fontSize:"80px"}}>Common Diseases</h1>
            <div className="flip-card-container">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="/pic/pic25.jpg" alt="Anemia" />
                            <h2>Anemia</h2>
                        </div>
                        <div className="flip-card-back">
                            <p>
                                Anemia is a condition characterized by a deficiency of red blood cells or hemoglobin in the blood. This can result in symptoms such as fatigue, weakness, pale skin, shortness of breath, and dizziness.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="/pic/pic26.jpg" alt="Lymphoma" />
                            <h2>Lymphoma</h2>
                        </div>
                        <div className="flip-card-back">
                            <p>
                            A type of cancer that affects the lymphatic system, including lymph nodes and lymphoid tissues.                            </p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="/pic/pic27.webp" alt="Hemophilia" />
                            <h2>Hemophilia</h2>
                        </div>
                        <div className="flip-card-back">
                            <p>
                            A genetic disorder where blood does not clot properly, leading to excessive bleeding even from minor injuries.</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="/pic/pic28.jpg" alt="Leukemia" style={{height:"300px"}}/>
                            <h2>Leukemia</h2>
                        </div>
                        <div className="flip-card-back">
                            <p>
                            Cancer of the blood-forming tissues, leading to abnormal production of white blood cells. There are different types of leukemia, including acute lymphoblastic leukemia (ALL), acute myeloid leukemia (AML), chronic lymphocytic leukemia (CLL), and chronic myeloid leukemia (CML).                            </p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="/pic/pic29.jpg" alt="Sickle Cell Disease" />
                            <h2>Sickle Cell Disease</h2>
                        </div>
                        <div className="flip-card-back">
                            <p>
                            A genetic disorder that affects the shape of red blood cells, causing them to become rigid and sickle-shaped, leading to blockages in blood vessels and reduced oxygen delivery to tissues. </p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="/pic/pic30.jpg" alt="Thalassemia" />
                            <h2>Thalassemia</h2>
                        </div>
                        <div className="flip-card-back">
                            <p>
                            An inherited blood disorder characterized by abnormal hemoglobin production, leading to a decrease in the production of red blood cells and anemia. </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default CommonDisease;
