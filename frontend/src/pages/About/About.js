import React from "react";
import "./about.css";
import 'font-awesome/css/font-awesome.min.css';
import {Carousel} from 'react-bootstrap'
import AboutUs from "../../components/AboutUs";
import Counter from './../../components/Counter';
import Slider from "../../components/Slider";
import Footer from "../../components/Footer";





function About() {
  return (
    <div>
    <header>
        <div className="intro-2 overlay">
                <div className="full-bg-img">
                    <div className="header mask rgba-black-light flex-center">
                        <div className="container text-center white-text">
                            <div className="text-white text-center">
                                <i className="fa fa-paw paw" aria-hidden="true"></i>
                                <h1>About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </header>
    <AboutUs/>
    <Counter/>
    <Slider/>
    <Footer/>
    </div>
  );
}

export default About;
