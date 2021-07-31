import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { Carousel } from 'react-bootstrap'

function Slider() {
    return (
        <div>
            <main style={{ margin: '3rem 0 5rem 0' }}>
                <div className="container">
                    <h3 className="text-center clients">What our clients say
                    </h3>
                    <Carousel id={'soliloquy-container-4985'} controls={false} indicators={false}>
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-12" >
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Maiores voluptate eligendi molestias iusto expedita saepe
                                            necessitatibus! Cupiditate reprehenderit vero eos! Deleniti
                                            odio cupiditate pariatur repellat iste nesciunt a facilis aliquid!
                                        </p>
                                    </div>
                                    <div className="image">
                                        <img src={"resources/first.jpg"} className="img-fluid" alt="" />
                                        <h4 className="d-md-inline-block">John Sadana</h4>
                                    </div>
                                </div>

                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-12">
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Maiores voluptate eligendi molestias iusto expedita saepe
                                            necessitatibus! Cupiditate reprehenderit vero eos! Deleniti
                                            odio cupiditate pariatur repellat iste nesciunt a facilis aliquid!
                                        </p>
                                    </div>
                                    <div className="image">
                                        <img src="./resources/download2.jpg" className="img-fluid" alt="" />
                                        <h4 className="d-md-inline-block">John Sadana</h4>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>

                    <Carousel id={'soliloquy-container-4986'} controls={false} indicators={false}>
                        <Carousel.Item>
                            <div className="row">
                                <div className=" col-md-6" >
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Maiores voluptate eligendi molestias iusto expedita saepe
                                            necessitatibus! Cupiditate reprehenderit vero eos! Deleniti
                                            odio cupiditate pariatur repellat iste nesciunt a facilis aliquid!
                                        </p>
                                    </div>
                                    <div className="image">
                                        <img src={'./resources/first.jpg'} className="img-fluid" alt="" />
                                        <h4 className="d-md-inline-block">John Sadana</h4>
                                    </div>
                                </div>
                                <div className=" col-md-6" >
                                    <div className="content" >
                                        <p id="catalogueCarousel ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Maiores voluptate eligendi molestias iusto expedita saepe
                                            necessitatibus! Cupiditate reprehenderit vero eos! Deleniti
                                            odio cupiditate pariatur repellat iste nesciunt a facilis aliquid!
                                        </p>
                                    </div>
                                    <div className="image">
                                        <img src="./resources/download2.jpg" className="img-fluid" alt="" />
                                        <h4 className="d-md-inline-block">John Sadana</h4>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Maiores voluptate eligendi molestias iusto expedita saepe
                                            necessitatibus! Cupiditate reprehenderit vero eos! Deleniti
                                            odio cupiditate pariatur repellat iste nesciunt a facilis aliquid!
                                        </p>
                                    </div>
                                    <div className="image">
                                        <img src="./resources/download2.jpg" className="img-fluid" alt="" />
                                        <h4 className="d-md-inline-block">John Sadana</h4>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Maiores voluptate eligendi molestias iusto expedita saepe
                                            necessitatibus! Cupiditate reprehenderit vero eos! Deleniti
                                            odio cupiditate pariatur repellat iste nesciunt a facilis aliquid!
                                        </p>
                                    </div>
                                    <div className="image">
                                        <img src="./resources/download3.jpg" className="img-fluid" alt="" />
                                        <h4 className="d-md-inline-block">John Sadana</h4>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </main>
        </div>
    );
}

export default Slider;
