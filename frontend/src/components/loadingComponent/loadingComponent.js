import React from "react";
import "./loadingComponent.css";
function LoadingComponent() {
  return (
    <>
      <div class="text-center">
        <span
          class="fa fa-paw loadingComponent"
          style={{ color: "#f9575c", fontSize: "4vw" }}
        ></span>
      </div>
    </>
  );
}
export default LoadingComponent;
