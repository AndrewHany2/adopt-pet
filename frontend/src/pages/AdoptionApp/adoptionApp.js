import React from "react";
import "./adoptionApp.css";
import AdoptionForm from "../../components/AdoptionApp";
import Footer from "../../components/Footer"
import LoadingScreen from "../../components/Loading/loading";
import {useState, useEffect}  from 'react'
function AdoptionApp(){
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => setLoading(false), 6000)
    }, [])
  
    return (
        <>
        {loading === false ? (
            <>
        <div className="container-fluid header p-4" style={{backgroundImage:"url('./resources/jumbotron.jpg')"}}>
            <div className="p-2 p-sm-4">
            <i className="fa fa-paw" style={{ color: "#f9575c", fontSize: "4vw" }}></i>
            </div>
          <div className="adoptionFont myFont">Adoption</div>
            <div className="homeFont myFont">
                <span>HOME {">"}</span>
                <span style={{ color: "#cecece" }}>ADOPTION</span>
            </div>
      </div>
      <AdoptionForm/>
      <Footer/>
      </>
      ):(<LoadingScreen/>
      )}   
        </>
    );
}
export default AdoptionApp