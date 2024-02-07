import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Button, Col, Row, Spinner, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
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
  }, []);
  //handleclick
  const handleClick = () => {
    toast.success("Thank you Like !!");
  };
  //handlecart
  const handleCart = () => {
    toast.success("Your Order Move to Cart !!");
  };
  //handlefile
  const handleFile = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
    setModel({ ...model, image: URL.createObjectURL(event.target.files[0]) });
  };

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
                {data?.data?.length ? (
                  data?.data?.map((item) => (
                    <Card
                      onMouseEnter={() => setHoveredCard(item.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={`container  width mb-2 mx-1 ms-3 ${
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
                          {hoveredCard === item.id && (
                            <div>
                              <Icon
                                icon="carbon:view"
                                width="15"
                                height="15"
                                onClick={() => {
                                  setView(true);
                                  setModel(item);
                                }}
                              />
                            </div>
                          )}
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
                          className="dashboardimg image mx-auto p-0 "
                          variant="top"
                          src={item.image}
                        />

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
                title={edit?"edit":"view"}
                body={
                  <p>
                    <Row>
                      <Card.Img
                        className="dashboardimg mx-auto p-0 "
                        variant="top"
                        src={file?.length ? file : model?.image}
                      />
                      {edit && (
                        <>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="inputfield">
                                Image :
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

                      <span className="mb-2 ">
                        {!edit ? (
                          <Card.Text> {model?.title} </Card.Text>
                        ) : (
                          <>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label className="inputfield">
                                  Title :
                                </Form.Label>
                                <Form.Control
                                  value={model?.title}
                                  className="input w-100 "
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
                    </Row>
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
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="inputfield">
                                Category :
                              </Form.Label>
                              <Form.Control
                                value={model?.category}
                                className="input w-100 "
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

                    <Row>
                      {!edit ? (
                        <Card.Text>{model?.description}</Card.Text>
                      ) : (
                        <>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label className="inputfield">Description :</Form.Label>
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
                          <Card.Text>
                            {" "}
                            <span className="mt-2">
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
                                  controlId="exampleForm.ControlTextarea1"
                                >
                                  <Form.Label className="inputfield">
                                    Price :
                                  </Form.Label>
                                  <Form.Control
                                    value={model?.price}
                                    className="input w-100 "
                                    onChange={(e) =>
                                      setModel({
                                        ...model,
                                        price: e.target.value,
                                      })
                                    }
                                  />
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
                disabled2={disabled}
                button1Click={() => {
                  if (edit) {
                    setIsdisable(true);
                    axios
                      .put(`https:fakestoreapi.com/products/${model.id}`, model)
                      .then((res) => {
                        console.log(res, "******");
                        toast.success("data updated successfully");
                        setIsdisable(false);
                        setEdit(false);
                      })
                      .catch((error) => {});
                  } else {
                    setEdit(true);
                  }
                }}
                button2Click={() => {
                  if (edit) {
                    setDisabled(true);
                    setView(false);
                    setEdit(false);
                  } else {
                    axios
                      .delete(`https://fakestoreapi.com/products/${model.id}`)
                      .then((res) => {
                        setDisabled(false);
                        setView(false);
                        toast.success("data deleted successfully");
                      })
                      .catch((error) => {});
                  }
                }}
                closeButton={() => setView(false)}
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
