import React from "react";
import "./about.css";
import 'font-awesome/css/font-awesome.min.css';
import AboutUs from "../../components/AboutUs";
import Counter from './../../components/Counter';
import Slider from "../../components/Slider";
import PageHeader from "../../components/PageHeader";




function About() {
  return (
    <div>
    <PageHeader title='About Us'/>
    <AboutUs/>
    <Counter/>
    <Slider/>
    </div>
  );
}

export default About;
