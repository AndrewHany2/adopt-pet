import React from "react";
import 'font-awesome/css/font-awesome.min.css';



function PageHeader(props) {
  return (
    <header>
        <div className="intro-2  overlay">
                <div className="full-bg-img">
                    <div className=" mask rgba-black-light flex-center">
                        <div className="container text-center white-text">
                            <div className="text-white text-center">
                                <i className="fa fa-paw paw" aria-hidden="true"></i>
                                <h1>{props.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </header>
  );
}

export default PageHeader;
