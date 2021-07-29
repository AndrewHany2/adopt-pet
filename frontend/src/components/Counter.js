import React from "react";
import 'font-awesome/css/font-awesome.min.css';

function Counter() {
    return (
        <div>
            <main className="py-5" style={{ backgroundColor: '#fbf4de' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 ">
                            <div className="mr-2 counter">
                                <i className="counter-icon fa fa-users fa-4x"></i>
                                <div className="counter-value">1500</div>
                                <h3 className="title">Happy Clients</h3>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mr-2 counter">
                                <div className="counter-icon">
                                    <img src={'resources/dog-in-front-of-a-man.png'} className="icon" alt="icon" />
                                </div>
                                <div className="counter-value">14</div>
                                <h3 className="title">Professionals</h3>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mr-2 counter">
                                <div className="counter-icon">
                                    <img src={'resources/pet-shelter.png'} className="icon" alt="icon" />
                                </div>
                                <div className="counter-value">900</div>
                                <h3 className="title">Adopted Pets</h3>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mr-2 counter">
                                <div className="counter-icon">
                                    <img src={'resources/prize-badge-with-paw-print.png'} className="icon" alt="icon" />
                                </div>
                                <div className="counter-value">12</div>
                                <h3 className="title">Prizes</h3>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default Counter;
