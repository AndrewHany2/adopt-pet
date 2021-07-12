import React from "react";
import "./contactUs.css"
import Footer from "../../components/Footer";
function ContactUs(){
    return(
        <>
        <section id="contactUs">
        <div className="container">
            <h2 className="text-center p-5">Contact Us</h2>
            <div className="row">
                <div className="col-12 col-md-6 mb-5">
                    <div className="contact p-5">
                        <i className="fa fa-envelope"></i>
                        <h2 className="text-center">Send us a Maessage</h2>
                        <p className="text-center text-danger ">email@gmail.com</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 mb-5">
                    <div className="contact p-5">
                        <i className="fa fa-location-arrow"></i>
                        <h2 className="text-center">Visit our Location</h2>
                        <p className="text-center text-secondary">Pet Street 123 - Egypt</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 mb-5">
                    <div className="contact p-5">
                        <i className="fa fa-phone"></i>
                        <h2 className="text-center">Call us today</h2>
                        <p className="text-center text-danger ">(123) 456-789</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 mb-5">
                    <div className="contact p-5 p-md-4 p-lg-5">
                        <i className="fa fa-heart"></i>
                        <h3 className="text-center pt-md-2 pt-lg-0">Follow us on Social Media</h3>
                        <p className="text-center iconMadia">
                            <i className="fa fa-facebook-square fa-2x mr-2"></i>
                            <i className="fa fa-twitter fa-2x mr-2"></i>
                            <i className="fa fa-google-plus fa-2x mr-2"></i>
                        </p>
                    </div>
                </div>
            </div>
            <div className="row pb-5">

                <div className="col-12 col-md-6 contactForm">
                    <p className="h4">Send us a message!</p>
                    <form>
                        <label className="d-block">Name*</label>
                        <input type="text" className="pb-1" name="name"/>
                        <label className="d-block">Email Address*</label>
                        <input type="email" name="email"/>
                        <label className="d-block">Subject*</label>
                        <input type="text" className="pb-1" name="subject"/>
                        <label className="d-block">Message*</label>
                        <textarea name="message" cols="40" rows="3"></textarea>
                        <input type="button" value="SEND MESSAGE" className="sendMessage mt-3 px-3 py-2"/>
                    </form>
                </div>
                <div className="col-12 col-md-6">
                    <img src={"./resources/Mail-sent.png"} className="img-fluid"/>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
    )
}
export default ContactUs