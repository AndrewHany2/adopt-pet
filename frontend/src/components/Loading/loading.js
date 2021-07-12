import React from "react"
import "./loading.css"
 function LoadingScreen(){
        
    return(
        <>
        <div id="preloader">
            <div className="spinner">
                <div  className="fa fa-paw bounce1" style={{ color: "#f9575c", fontSize: "4vw" }}></div>
            </div>
        </div>
        </>
    )
 }
 export default LoadingScreen