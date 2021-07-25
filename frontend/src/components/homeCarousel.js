import { Carousel } from "react-bootstrap";

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
          <h3>Adopt Pet</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/resources/slide2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Help pet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/resources/slide3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Support pet</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/resources/slide4.jpg"
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Home for your pet</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
