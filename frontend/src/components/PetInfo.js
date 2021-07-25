import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

function PetInfo(props) {
  const userLogin = useSelector((state) => state.userLogin);


  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [show, setShow] = useState(false);
  const [alreadyRequested, setAlreadyRequested] = useState(false);
  const [message, setMessage] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdopt = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/adoptionRequest", {
        requestedUserId: userLogin.info.userId,
        ownerUserId: props.petInfo.owner,
        petId: props.petInfo._id,
      });
      if (data) {
        setLoading(false);
        setSuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const sendMessage = async () => {
    const checkCoversation = await axios.get(
      `/api/conversations/find/${userLogin.info.userId}/${props.petInfo.owner}`
    );
    if (!checkCoversation.data) {
      console.log("sdas");
      const result = await axios.post(`/api/conversations`, {
        senderId: userLogin.info.userId,
        receiverId: props.petInfo.owner,
      });
      if (result) {
        await axios.post(`/api/messages`, {
          conversationId: result.data._id,
          sender: userLogin.info.userId,
          text: message,
        });
      }
    } else if (checkCoversation.data) {
      await axios.post(`/api/messages`, {
        conversationId: checkCoversation.data._id,
        sender: userLogin.info.userId,
        text: message,
      });
    }
    handleClose();
  };





  return (
    <>
                <div className="page m-5 m-md-0">
            <div className="container">
              <div className="row mt-5">
                <div className="row bg-light-custom border-irregular1">
                  <div className="row p-4 d-flex justify-content-around">
                    <div
                      className="col-12 col-md-4 text-center"
                      style={{ width: "300px" }}
                    >
                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="border-irregular1 img-fluid w-100 myimg"
                            src={props.petInfo.image}
                            alt=""
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="border-irregular1 img-fluid w-100 myimg"
                            src="/resources/adoption1-185x185.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="border-irregular1 img-fluid w-100 myimg"
                            src="/resources/adoption2-185x185.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="text-center text-md-left col-12 col-md-8 col-lg-4 mt-4">
                      <div className="row">
                        <h4 className="col-12">
                          <strong>Pet Name:</strong> {props.petInfo.name}
                        </h4>
                        <div className="col-sm-6">
                          <ul className="list-unstyled pet-adopt-info">
                            <li className="h7">
                              Gender: <span> {props.petInfo.gender}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-6">
                          <ul className="list-unstyled pet-adopt-info">
                            <li className="h7">
                              Age: <span>{props.petInfo.age}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-6">
                          <ul className="list-unstyled pet-adopt-info">
                            <li className="h7">
                              Breed: <span> Poodle</span>
                            </li>
                          </ul>
                        </div>

                        <div className="col-sm-6">
                          <ul className="list-unstyled pet-adopt-info">
                            <li className="h7">
                              Vaccinated: <span> {props.petInfo.vaccinated}</span>
                            </li>
                          </ul>
                        </div>

                        <div className="col-sm-6">
                          <ul className="list-unstyled pet-adopt-info">
                            <li className="h7">
                              Size: <span> {props.petInfo.size}</span>
                            </li>
                          </ul>
                        </div>
                        {userLogin.info ? (
                          <>
                            <div className="col-sm-6 col-md-8 col-lg-10">
                              {!loading && !success && !alreadyRequested && (
                                <button
                                  className="btn btn-primary d-inline"
                                  onClick={handleAdopt}
                                >
                                  Adopt
                                </button>
                              )}
                              <button
                                className="btn btn-primary d-inline"
                                onClick={handleShow}
                              >
                                Message Owner
                              </button>
                            </div>
                            {success && (
                              <div class="alert alert-primary" role="alert">
                                Adoption Request sent wait for response
                              </div>
                            )}
                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>
                                  Send message to pet owner
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <Form.Group
                                  className="mb-3"
                                  controlId="exampleForm.ControlTextarea1"
                                >
                                  <Form.Label>Message</Form.Label>
                                  <Form.Control
                                    as="textarea"
                                    rows={3}
                                    onChange={(e) => {
                                      setMessage(e.target.value);
                                    }}
                                  />
                                </Form.Group>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  Close
                                </Button>
                                <Button variant="primary" onClick={sendMessage}>
                                  Send Message
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </>
                        ) : (
                          <div className="col-sm-6 col-md-8">
                            <div class="alert alert-danger" role="alert">
                              Login to adopt
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3>About Lucky</h3>
                <ul className="custom list-inline font-weight-bold">
                  <li className="list-inline-item">
                    <i
                      className="fa fa-paw mr-1"
                      style={{ color: "#f9575c", fontSize: "1.3vw" }}
                    ></i>
                    Friendly to other dogs
                  </li>
                  <li className="list-inline-item">
                    <i
                      className="fa fa-paw mr-1"
                      style={{ color: "#f9575c", fontSize: "1.3vw" }}
                    ></i>
                    Good for Apartments
                  </li>
                  <li className="list-inline-item">
                    <i
                      className="fa fa-paw mr-1"
                      style={{ color: "#f9575c", fontSize: "1.3vw" }}
                    ></i>
                    Friendly with Kids
                  </li>
                </ul>
                <p style={{ display: "block" }}>{props.petInfo.description}</p>
              </div>
              </div>
              </div>
    </>
  );
}

export default PetInfo;
