import React from "react";
import "./loadingComponent.css";
function LoadingComponent() {
  return (
    <>
      <div className="text-center">
        <span
          className="fa fa-paw loadingComponent"
          style={{ color: "#f9575c", fontSize: "4vw" }}
        ></span>
      </div>
    </>
  );
}
export default LoadingComponent;
