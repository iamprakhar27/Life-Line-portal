import "../css/homepage.css"

function Faq() {
    return (
        <>
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <div className="accordion row" id="accordion">
                <div className="col-6">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Who can donate blood?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordion">
                            <div className="accordion-body">
                                Generally, individuals who are in good health, weigh at least 110 pounds, and are aged between 16 and 65 (age requirements may vary depending on the country) are eligible to donate blood. Some conditions, such as certain illnesses or recent travels to certain countries, may defer individuals from donating.      </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How often can I donate blood?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                                The frequency of blood donation depends on the regulations of the blood donation center and your health status. In most cases, you can donate whole blood every 8 to 12 weeks. For other types of donations, such as platelet or plasma donations, you might be able to donate more frequently.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Does donating blood hurt?</button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                                You may feel a slight pinch or sting when the needle is inserted, but the discomfort is minimal for most donors. The actual donation process typically takes less than 10 minutes for whole blood donations.                </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                How long does it take to donate blood?</button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                                The entire process, from registration to post-donation refreshments, usually takes about 30 to 60 minutes. The actual blood donation typically takes around 10 minutes.
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-6">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive">
                            Who can receive blood transfusions?
                            </button>
                        </h2>
                        <div id="collapsefive" className="accordion-collapse collapse show" data-bs-parent="#accordion">
                            <div className="accordion-body">
                            Generally, anyone with a medical need can receive a blood transfusion. This includes individuals who have lost blood due to injury or surgery, those with certain medical conditions like anemia or cancer, and patients undergoing organ transplants. However, there are criteria and compatibility factors to ensure the safety and effectiveness of the transfusion. </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                            How is blood compatibility determined?
                                                        </button>
                        </h2>
                        <div id="collapsesix" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                            Blood compatibility is determined by matching the blood type of the donor with that of the recipient. The four main blood types are A, B, AB, and O, each characterized by specific antigens on the surface of red blood cells. Additionally, the Rh factor (positive or negative) must also be considered. ABO and Rh compatibility are crucial to prevent adverse reactions when receiving a blood transfusion.                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                            How is donated blood stored and transported?</button>
                        </h2>
                        <div id="collapseseven" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                            Donated blood undergoes processing and is typically separated into its various components (red blood cells, plasma, platelets). Each component is then stored under specific conditions to maintain its viability. Red blood cells are typically stored at refrigerated temperatures, while platelets and plasma may be stored at room temperature. During transport, blood products are carefully packaged and maintained within appropriate temperature ranges to ensure their integrity and safety until they reach their destination. </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                            Are there risks associated with receiving blood transfusions?</button>
                        </h2>
                        <div id="collapseeight" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                            While blood transfusions are generally safe, there are potential risks. These include allergic reactions, febrile non-hemolytic reactions (fever), transfusion-related acute lung injury (TRALI), and transfusion-associated circulatory overload (TACO). There's also a risk of transfusion-transmitted infections, although stringent screening measures are in place to minimize this risk.                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Faq;