import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import {Carousel} from 'react-bootstrap'




function Slider() {
  return (
    <div>
    <main style={{margin: '3rem 0 5rem 0'}}>
        <div class="container">
            <h3 class="text-center clients">What our clients say
            </h3>
            <Carousel id={'soliloquy-container-4985'}>
                <Carousel.Item>
                <div class="row">
                        <div class="col-12" >
                                <div class="content">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                     Maiores voluptate eligendi molestias iusto expedita saepe
                                                      necessitatibus! Cupiditate reprehenderit vero eos! Deleniti 
                                                      odio cupiditate pariatur repellat iste nesciunt a facilis aliquid!
                                        </p>
                                </div>
                        <div class="image">
                        <img src={"resources/first.jpg"} class="img-fluid"/>
                        <h4 class="d-md-inline-block">John Sadana</h4>
                        </div>
                        </div>
                                    
                </div>  
        </Carousel.Item>
        <Carousel.Item>
                    <div class="row">
                            <div class="col-12">
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Maiores voluptate eligendi molestias iusto expedita saepe
                                        necessitatibus! Cupiditate reprehenderit vero eos! Deleniti 
                                        odio cupiditate pariatur repellat iste nesciunt a facilis aliquid!
                                    </p>
                                </div>
                                <div class="image">
                                    <img src="./resources/download2.jpg" class="img-fluid"/>
                                    <h4 class="d-md-inline-block">John Sadana</h4>
                                </div>
                            </div>
                        </div>
        </Carousel.Item>
    </Carousel>

    <Carousel id={'soliloquy-container-4986'}>
    <Carousel.Item>
                <div class="row">
                        <div class=" col-md-6" >
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                     Maiores voluptate eligendi molestias iusto expedita saepe
                                      necessitatibus! Cupiditate reprehenderit vero eos! Deleniti 
                                      odio cupiditate pariatur repellat iste nesciunt a facilis aliquid!
                                </p>
                            </div>
                            <div class="image">
                                <img src={'./resources/first.jpg'} class="img-fluid"/>
                                <h4 class="d-md-inline-block">John Sadana</h4>
                            </div>
                        </div>
                        <div class=" col-md-6" >
                            <div class="content" >
                                <p id="catalogueCarousel ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                     Maiores voluptate eligendi molestias iusto expedita saepe
                                      necessitatibus! Cupiditate reprehenderit vero eos! Deleniti 
                                      odio cupiditate pariatur repellat iste nesciunt a facilis aliquid!
                                </p>
                            </div>
                            <div class="image">
                                <img src="./resources/download2.jpg" class="img-fluid"/>
                                <h4 class="d-md-inline-block">John Sadana</h4>
                            </div>
                        </div>
                </div>
    </Carousel.Item>
    <Carousel.Item>
                <div class="row">
                        <div class="col-md-6">
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                     Maiores voluptate eligendi molestias iusto expedita saepe
                                      necessitatibus! Cupiditate reprehenderit vero eos! Deleniti 
                                      odio cupiditate pariatur repellat iste nesciunt a facilis aliquid!
                                </p>
                            </div>
                            <div class="image">
                                <img src="./resources/download2.jpg" class="img-fluid"/>
                                <h4 class="d-md-inline-block">John Sadana</h4>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                     Maiores voluptate eligendi molestias iusto expedita saepe
                                      necessitatibus! Cupiditate reprehenderit vero eos! Deleniti 
                                      odio cupiditate pariatur repellat iste nesciunt a facilis aliquid!
                                </p>
                            </div>
                            <div class="image">
                                <img src="./resources/download3.jpg" class="img-fluid"/>
                                <h4 class="d-md-inline-block">John Sadana</h4>
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
