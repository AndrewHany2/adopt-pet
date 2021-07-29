import { Carousel } from "react-bootstrap"
import { faBone, faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function HomeCarouel() {

    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/resources/slide1old.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <FontAwesomeIcon icon={faBone} className="d-none d-lg-block" style={{ color: "#F9BE4F", position: "absolute", top: "-30px", left: "0", fontSize: "4.5em", transform: "rotate(125deg)" }} />
                    <h3>Adopt a pet today!</h3>
                    <p className="d-none d-lg-block">Search our list of dogs, cats and other pets available for adoption near you</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/resources/slide2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <FontAwesomeIcon icon={faCat} className="d-none d-lg-block" style={{ color: "#F9BE4F", position: "absolute", top: "-34px", left: "0", fontSize: "5em" }} />
                    <h3>Experienced Veterinarians</h3>
                    <p className="d-none d-lg-block">Your pet is in good hands, meet our highly qualified professionals</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/resources/slide3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <FontAwesomeIcon icon={faBone} className="d-none d-lg-block" style={{ color: "#F9BE4F", position: "absolute", top: "-30px", left: "0", fontSize: "4.5em", transform: "rotate(125deg)" }} />
                    <h3>High Quality pet food</h3>
                    <p className="d-none d-lg-block">We have all the best products for your pet, visit our store today!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/resources/slide4.jpg"
                    alt="Fourth slide"
                />

                <Carousel.Caption>
                    <FontAwesomeIcon icon={faCat} className="d-none d-lg-block" style={{ color: "#F9BE4F", position: "absolute", top: "-34px", left: "0", fontSize: "5em" }} />
                    <h3>Visit our Pet Hotel</h3>
                    <p className="d-none d-lg-block">Our facility is designed to meet the unique needs of your pet</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}