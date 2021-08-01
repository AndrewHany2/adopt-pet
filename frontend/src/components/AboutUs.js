import React from "react";
import 'font-awesome/css/font-awesome.min.css';

function AboutUs() {
    return (
        <div>
            <main className="py-5 my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="text-left ">Caring for your pets</h3>
                            <p align="justify">quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <ul className="about-ul">
                                <li><i className="fa fa-paw paw-sm"></i>
                                    Orci eget, viverra elit liquam erat volut pat phas ellus ac</li>
                                <li><i className="fa fa-paw paw-sm"></i>
                                    Ipuset phas ellus ac sodales Lorem ipsum dolor Phas ell</li>
                                <li><i className="fa fa-paw paw-sm"></i>
                                    Aliquam erat volut pat phas ellu</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <img src={'resources/cat.jpg'} className="img-fluid about-img" alt="Cat" />
                        </div>
                    </div>
                </div>
            </main>


        </div>
    );
}

export default AboutUs;
