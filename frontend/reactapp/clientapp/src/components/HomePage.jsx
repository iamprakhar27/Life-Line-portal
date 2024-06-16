import { NavLink } from "react-router-dom";
import Faq from "./Faq";
import "../css/homepage.css"

function HomePage() {
    return (
        <>
            <div className="content bg-body-secondary">
                {/* banner */}
                <div className="builder-banner size-standard">
                    <div className="banner-image-wrap">
                        <img src={"/pic/pic32.jpeg"} alt="" />
                    </div>
                    <div className="content clearfix container banner_content_wrap">
                        <div className="banner_content">
                            <h2>Donate Blood, Save Lives</h2><hr />
                            <div className="text-content clearfix field field--name-body field--type-text-with-summary field--label-hidden field__item">
                                 <p>Life Line is a web-based platform that connects blood donors with hospitals, receivers   and   medical facilities in need of blood and   donations.
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row1">
                    <div className="col-6x">

                        <p>
                            Blood donation is a noble act that saves countless lives worldwide. When individuals donate blood, they contribute to a critical resource that is vital for various medical procedures, surgeries, and emergency situations. Each donation has the potential to make a significant impact, as blood is irreplaceable and essential for treating patients with conditions ranging from chronic illnesses to traumatic injuries.
                            Moreover, the act of blood donation not only provides physical benefits but also fosters a sense of community and altruism. It brings together individuals from diverse backgrounds, united by the common goal of helping others in need. Through their selfless contributions, blood donors play a vital role in ensuring the well-being and survival of patients, reaffirming the power of compassion and solidarity in making a positive difference in the world
                            <button className="open-link"> <NavLink to="/aboutus">know more</NavLink> </button>
                        </p>

                    </div>

                    <div className="col-6x">
                        <img src={"/pic/pic40.jpg"} alt="" className="img2"/>
                    </div>
                </div>

                {/* cards */}
                <div className="container-fluid2 row">
                    <div className="col-4">
                        <div className="card">
                            <img src={"./pic/pic37.jpg"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Know your Donation </h5>
                                <p className="card-text">Discover how you can give blood, plasma or platelets, and book your next donation.</p>
                                <NavLink to="/blooddonationtype" className="btn1 btn-primary">Know More</NavLink>
                            </div>
                        </div>

                    </div>

                    <div className="col-4">
                        <div className="card">
                            <img src={"./pic/pic38.jpg"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">To whom can I donate blood?</h5>
                                <p className="card-text">Know to whom your blood can be easily donated, and consider the profound impact your generosity can have on countless lives.</p>
                                <NavLink to="/compatible" className="btn1 btn-primary">Know More</NavLink>
                            </div>
                        </div>

                    </div>

                    <div className="col-4">
                        <div className="card">
                            <img src={"./pic/pic39.jpg"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Diseases transmitted through blood</h5>
                                <p className="card-text">Check what types of diseases could be present in blood.</p>
                                <NavLink to="/commondisease" className="btn1 btn-primary">Know More</NavLink>
                            </div>
                        </div>

                    </div>
                </div>


                  {/* navigations */}
                <div className="row">
                    <div className="col-6">
                        <img src={"/pic/pic41.jpg"} alt=""  className="img1"/>
                    </div>

                    <div className="col-6">

                        <div className="nav-links">
                            <NavLink to="/donor" className="nav-linkx nav-link1">Be a Blood Donor Register Now and save many lives.</NavLink>
                            <NavLink  to="/searchdonors" className="nav-linkx nav-link2">Search for available and willing blood donors in your city.</NavLink>
                            <NavLink to="/showstory" className="nav-linkx nav-link3">Check the Stories shared by the blood donors and about their donations.</NavLink>
                        </div>

                    </div>

                </div>
                 
                 {/* faqs */}
                 <Faq />

            </div>



        </>
    );
}

export default HomePage;