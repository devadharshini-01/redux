import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Container, Button, Col, Row, Spinner, Form } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Icon } from "@iconify/react";
import Card from "react-bootstrap/Card";
import Model from "./Model";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import { DashboardGetAction } from "../redux/action/DashboardActionapi";

const Productlist = ({ active, setActive }) => {
  const navigate = useNavigate();
  //state management
  const [view, setView] = useState(false);
  const [model, setModel] = useState();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [edit, setEdit] = useState(false);
  const [isdisable, setIsdisable] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [file, setFile] = useState([]);
  //dispatch
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dashboard.dashboardgetapi);
  useEffect(() => {
    dispatch(DashboardGetAction());
    // eslint-disable-next-line
  }, []);
  //handleclick
  const handleClick = (val) => {
    toast.success(val);
  };

  //handlefile
  const handleFile = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
    setModel({ ...model, image: URL.createObjectURL(event.target.files[0]) });
  };

  return (
    <>
      <div className="vh-100 ">
        <Header />
        <Container fluid className="p-0 container-fluid ">
          <Row className="vh-100">
            <div className=" col-2 d-none d-sm-none d-md-block d-lg-block h-100">
              <div className="d-none d-sm-none d-md-block d-lg-block pe-0 sidebar h-100 ">
                <Sidebar active={active} setActive={setActive} />
              </div>
            </div>
            <div className="col-sm-12 col-xl-10 col-lg-10 col-md-10">
              <div className="vh-100 overflow-scroll padding-bottom">
                <h4 className="text-danger ms-3 mt-2"> Product list</h4>
                <div className="ms-3 me-5">
                  <hr></hr>
                </div>
                <div className="text-end mb-3 me-5">
                  <Button
                    onClick={() => navigate("/Productdetail")}
                    variant="danger"
                  >
                    <Icon icon="zondicons:add-solid" /> <span> Add </span>
                  </Button>
                </div>
                <Row className="justify-content-center">
                  {data?.data?.length ? (
                    data?.data?.map((item) => (
                      <Card
                        onClick={() => {
                          setView(true);
                          setModel(item);
                          setEdit(false);
                        }}
                        onMouseEnter={() => setHoveredCard(item.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`container hover cursor-pointer width mb-2 mx-1 ms-3 ${
                          hoveredCard === item.id ? "hovered" : ""
                        }`}
                        key={item.id}
                      >
                        <Card.Text
                          className="text-center border-bottom border-top fw-bold text-truncate mt-2"
                          title={item.title}
                        >
                          {item.title}
                        </Card.Text>

                        <div className="text-end">
                          <Row>
                            <Col>
                              <Icon
                                onClick={() => handleClick("Thank you Like !!")}
                                className="icons"
                                icon="mdi:heart-outline"
                              />
                            </Col>
                          </Row>
                          <Row>
                            <div>
                              <Icon
                                onClick={() =>
                                  handleClick("Your Order Move to Cart !!")
                                }
                                icon="mdi:cart-outline"
                              />
                            </div>
                          </Row>
                        </div>
                        <div className="container">
                          <Row></Row>
                          <Card.Img
                            alt="dashboardimage"
                            className="dashboardimg image mx-auto p-0 "
                            variant="top"
                            src={item.image}
                          />
                          <Card.Body>
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
                                  <Icon className="mb-1" icon="emojione:star" />
                                  {item.rating.rate} / 5{" "}
                                </Card.Text>
                              </Col>
                            </Row>
                          </Card.Body>
                        </div>
                      </Card>
                    ))
                  ) : data.loading ? (
                    <Spinner
                      animation="border"
                      role="status"
                      className="spinner"
                    ></Spinner>
                  ) : (
                    "no data found"
                  )}
                </Row>
                <Model
                  show={view}
                  title={edit ? "Edit product" : "View product"}
                  body={
                    <p>
                      <Row>
                        <span className="mb-2 ">
                          {!edit ? (
                            <Card.Text className="text-center fw-bold h4">
                              {" "}
                              {model?.title}{" "}
                            </Card.Text>
                          ) : (
                            <>
                              <Form>
                                <Form.Group
                                  className="mb-3"
                                  controlId="title.id"
                                >
                                  <Form.Label className="inputfield">
                                    Title:
                                  </Form.Label>
                                  <Form.Control
                                    value={model?.title}
                                    onChange={(e) =>
                                      setModel({
                                        ...model,
                                        title: e.target.value,
                                      })
                                    }
                                  />
                                </Form.Group>
                              </Form>
                            </>
                          )}
                        </span>
                        <Col>
                          {" "}
                          {!edit ? (
                            <Card.Text className="text-center  mb-2">
                              {" "}
                              {model?.category}{" "}
                            </Card.Text>
                          ) : (
                            <>
                              <Form>
                                <Form.Group
                                  className="mb-3"
                                  controlId="category.id"
                                >
                                  <Form.Label className="inputfield">
                                    Category:
                                  </Form.Label>
                                  <Form.Control
                                    value={model?.category}
                                    onChange={(e) =>
                                      setModel({
                                        ...model,
                                        category: e.target.value,
                                      })
                                    }
                                  />
                                </Form.Group>
                              </Form>
                            </>
                          )}
                        </Col>
                        <Card.Img
                          alt="fileimage"
                          className="dashboardimg mx-auto p-0 "
                          variant="top"
                          src={file?.length ? file : model?.image}
                        />
                        {edit && (
                          <>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleimage"
                              >
                                <Form.Label className="inputfield">
                                  Image:
                                </Form.Label>
                                <Form.Control
                                  type="file"
                                  required="required"
                                  onChange={handleFile}
                                  className="mb-2 ms-1"
                                />
                              </Form.Group>
                            </Form>
                          </>
                        )}
                      </Row>

                      <Row>
                        {!edit ? (
                          <Card.Text>{model?.description}</Card.Text>
                        ) : (
                          <>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="description.id"
                              >
                                <Form.Label className="inputfield">
                                  Description
                                </Form.Label>
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  value={model?.description}
                                  onChange={(e) =>
                                    setModel({
                                      ...model,
                                      description: e.target.value,
                                    })
                                  }
                                />
                              </Form.Group>
                            </Form>
                          </>
                        )}
                      </Row>
                      <Row>
                        <Col>
                          {" "}
                          {!edit ? (
                            <Card.Text className="text-center">
                              {" "}
                              <span className="mt-2 ">
                                <b>$</b>
                              </span>{" "}
                              {model?.price}
                            </Card.Text>
                          ) : (
                            <>
                              <div className="input-container w-100 ">
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="price.id"
                                  >
                                    <Form.Label className="inputfield">
                                      Price :<small>(in dollars only)</small>
                                    </Form.Label>
                                    <Form.Control
                                      value={model?.price}
                                      onChange={(e) =>
                                        setModel({
                                          ...model,
                                          price: e.target.value,
                                        })
                                      }
                                    />
                                    <p className="dollar-sign ">
                                      <b>$</b>
                                    </p>
                                  </Form.Group>
                                </Form>
                              </div>
                            </>
                          )}
                        </Col>
                      </Row>
                    </p>
                  }
                  button1Value={edit ? "Update" : "Edit"}
                  button2Value={edit ? "Cancel" : "Delete"}
                  disabled1={isdisable}
                  variant1={edit ? "danger" : "secondary"}
                  variant2={edit ? "secondary" : "danger"}
                  disabled2={disabled}
                  button1Click={() => {
                    if (edit) {
                      setIsdisable(true);
                      axios
                        .put(
                          `https:fakestoreapi.com/products/${model.id}`,
                          model
                        )
                        .then((res) => {
                          console.log(res, "******");
                          toast.success(
                            `${res.data.title} updated successfully.`
                          );
                          setIsdisable(false);
                          setEdit(false);
                        })
                        .catch((error) => {
                          setIsdisable(false);
                        });
                    } else {
                      setEdit(true);
                    }
                  }}
                  button2Click={() => {
                    if (edit) {
                      setView(false);
                      setEdit(false);
                    } else {
                      setDisabled(true);
                      axios
                        .delete(`https://fakestoreapi.com/products/${model.id}`)
                        .then((res) => {
                          setDisabled(false);
                          setView(false);
                          toast.success(
                            `${res.data.title} deleted successfully.`
                          );
                        })
                        .catch((error) => {
                          setDisabled(false);
                        });
                    }
                  }}
                  closeButton={() => {
                    setView(false);
                    setEdit(false);
                  }}
                />
              </div>
            </div>
            <ToastContainer />
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Productlist;
