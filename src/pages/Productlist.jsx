import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Modal, Col, Row, Spinner } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Icon } from "@iconify/react";
import { Navigate, useNavigate, navigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import { DashboardGetAction } from "../redux/action/DashboardActionapi";
import Model from "./Model";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Productlist = ({ active, setActive }) => {
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const [model, setModel] = useState();
  const [hoveredCard, setHoveredCard] = useState(null);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.dashboard.dashboardgetapi);
  console.log("data::", data);
  useEffect(() => {
    dispatch(DashboardGetAction());
  }, []);
  const handleClick = () => {
    toast.success("Thank you Like !!");
  };

  const handleCart = () => {
    toast.success("Your Order Move to Cart !!");
  };
  const handleOrder = () => {
    toast.success("Thank you for Order... ");
    setTimeout(() => {
      Navigate("/product-list");
    }, 2000);
  };
  if (!data.data) {
    return (
      <div>
        <Header active={active} setActive={setActive} />
        <Row>
          <Col className="col-2 d-none d-sm-block">
            <Sidebar active={active} setActive={setActive} />
          </Col>
          <Col className="col-xl-10 col-sm-12 col-lg-10 col-md-10">
            <div>
              <h4 className=" ms-3"> Product Shop</h4>
              <div className="ms-3 me-3">
                <hr></hr>
              </div>
              <div className="text-center mt-4">
              
              <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="overflow-hidden">
        <Container fluid className="p-0 overflow-auto ">
          <Row className="vh-100">
            <div className="d-none d-sm-none d-md-block d-lg-block col-2  sidebar ">
              <Sidebar active={active} setActive={setActive} />
            </div>

            <div className="col-10">
              <h4 className="text-danger ms-3 mt-2"> Product list</h4>
              <div className="ms-3 me-5">
                <hr></hr>
              </div>
              <div className="  text-end mb-3 me-5 ">
                <Button
                  onClick={() => navigate("/Productdetail")}
                  variant="danger"
                >
                  <Icon icon="zondicons:add-solid" /> <span> Add </span>
                </Button>
              </div>

              <Row>
                {Array.isArray(data.data) &&
                  data.data.map((item) => (
                    <Card
                      onMouseEnter={() => setHoveredCard(item.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={`card-body  width mb-2 mx-1 ms-3 ${
                        hoveredCard === item.id ? "hovered" : ""
                      }`}
                      key={item.id}
                    >
                      <div className="text-end">
                        <Row>
                          <Col>
                            <Icon
                              onClick={(e) => handleClick(e)}
                              className="icons"
                              icon="mdi:heart-outline"
                            />
                          </Col>
                        </Row>
                        <Row>
                          <div>
                            <Icon
                              onClick={(e) => handleCart(e)}
                              icon="mdi:cart-outline"
                            />
                          </div>
                        </Row>
                      </div>
                      <div className="container">
                        <Card.Img
                          className="dashboardimg mx-auto p-0 "
                          variant="top"
                          src={item.image}
                        />
                        {hoveredCard === item.id && (
                          <div className="text-center mt-2 text-light">
                            <Button
                              onClick={() => {
                                setView(true);
                                setModel(item);
                              }}
                              variant="outline-dark"
                            >
                              Quick view
                            </Button>
                          </div>
                        )}

                        <Card.Body>
                          <Row>
                            <span className="mb-2 text-truncate">
                              <Card.Text>{item.title}</Card.Text>
                            </span>
                          </Row>
                          <Row>
                            <Col>
                              {" "}
                              <Card.Text>
                                <span>$</span>
                                {item.price}
                              </Card.Text>
                            </Col>

                            <Col>
                              {" "}
                              <Card.Text>
                                <Icon icon="emojione:star" />
                                {item.rating.rate} / 5{" "}
                              </Card.Text>
                            </Col>
                          </Row>
                        </Card.Body>
                      </div>
                    </Card>
                  ))}
              </Row>
              <Model
                show={view}
                body={
                  <p>
                    <Card.Img
                      className="dashboardimg mx-auto p-0 "
                      variant="top"
                      src={model?.image}
                    />
                    <Row>
                      <span className="mb-2 text-truncate">
                        <Card.Text>
                          <b>{model?.title}</b>
                        </Card.Text>
                      </span>
                    </Row>
                    <Row>
                      <Card.Text>{model?.description}</Card.Text>
                    </Row>
                    <Row>
                      <Col>
                        {" "}
                        <Card.Text>
                          <span>$</span>
                          {model?.price}
                        </Card.Text>
                      </Col>

                      <Col>
                        {" "}
                        <Card.Text>
                          <Icon icon="emojione:star" />
                          {model?.rating.rate} / 5{" "}
                        </Card.Text>
                      </Col>
                    </Row>
                  </p>
                }
                button1Value={"Buy now"}
                button1Click={() => setView(false)}
                closeButton={() => setView(false)}
                // button2Click={() => setView(false)}
              />
            </div>
            <ToastContainer />
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Productlist;
