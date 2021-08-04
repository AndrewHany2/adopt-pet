import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer() {
    return (
        <footer className="text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="fcontent">
                            <div className="fheading">
                                <h3><img src="/resources/theLogo.png" width="50px" alt="logo" /></h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, nesciunt accusamus esse
                                atque tempore incidunt nam dolores
                                quos tenetur quibusdam aspernatur excepturi, iure culpa, cum est libero voluptate debitis
                                obcaecati.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="fcontent">
                            <div className="fheading">
                                <h4>
                                    <i className="fa fa-envelope px-2"></i>
                                    Contact Us
                                </h4>
                            </div>
                            <ul className="contact">
                                <li>(123) 456-789</li>
                                <li>email@yoursite.com</li>
                                <li>Pet Street 123 – Cairo</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="fcontent">
                            <div className="fheading">
                                <h4>
                                    <FontAwesomeIcon icon={faClock} /> Working Hours
                                </h4>
                            </div>
                            <ul className="contact">
                                <li>Open 9am – 10pm</li>
                                <li>Holidays – Closed</li>
                                <li>Weekends – Closed</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
