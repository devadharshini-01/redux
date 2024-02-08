import { useNavigate } from "react-router-dom";
import { Col, Container, Form, Row } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import axios from "axios";
import { useEffect } from "react";

const ProductDetail = ({ active, setActive }) => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("Title is a required field"),
    category: yup.string().required("Category is a required field"),
    description: yup.string().required("Description is a required field"),
    image: yup.string().required("Image is a required field"),
    price: yup.number().required("Price is a required field"),
    rating: yup.object().shape({
      rate: yup.number().required("Rate is a required field"),
    }),
  });
  useEffect(() => {
    axios
      .post("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        console.log();
      });
  }, []);

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          navigate("/Productlist");
        }}
        initialValues={{
          title: "",
          category: "",
          description: "",
          image: "",
          price: "",
          rating: { rate: "" },
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Header className="Header" />

            <Container fluid className="p-0 ">
              <div className="overflow-hidden">
                <Row>
                  <div className="col-2 sidebar d-none d-sm-none d-md-block d-lg-block">
                    <div className="d-none d-sm-none d-md-block d-lg-block   sidebar vh-100">
                      <Sidebar
                        className="sidebar"
                        active={active}
                        setActive={setActive}
                      />
                    </div>
                  </div>
                  <div className=" col-sm-12 col-md-10 col-lg-10 mt-3 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="h6 form inputfield">
                        Title:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        isInvalid={!!errors.title}
                      />
                      {errors.title && (
                        <p className="error-message formik">{errors.title}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="category">
                      <Form.Label className="inputfield">Category:</Form.Label>
                      <Form.Control
                        type="text"
                        name="category"
                        value={values.category}
                        onChange={handleChange}
                        isInvalid={!!errors.category}
                      />
                      <p className="formik">{errors.category}</p>
                      <Form.Group className="mb-3" controlId="textarea">
                        <Form.Label className="inputfield">
                          Description
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          name="description"
                          value={values.description}
                          onChange={handleChange}
                          isInvalid={!!errors.description}
                        />
                        <p className="formik">{errors.description}</p>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="inputfield">Image:</Form.Label>
                        <Form.Control
                          type="text"
                          name="image"
                          value={values.image}
                          onChange={handleChange}
                          isInvalid={!!errors.image}
                        />
                        <p className="formik">{errors.image}</p>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="inputfield">
                          Price:<small>(in dollars only)</small>
                        </Form.Label>
                        <Form.Control
                          type="number"
                          name="price"
                          value={values.price}
                          onChange={handleChange}
                          isInvalid={!!errors.price}
                        />
                        <p className="formik">{errors.price}</p>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Row>
                          <Col>
                            <Form.Label className="inputfield">
                              Rating:
                            </Form.Label>
                            <Form.Control
                              className="w-25"
                              type="number"
                              name="rating.rate"
                              value={values.rating.rate}
                              onChange={handleChange}
                              isInvalid={!!errors.rating?.rate}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.rating?.rate}
                            </Form.Control.Feedback>
                          </Col>
                        </Row>
                      </Form.Group>
                    </Form.Group>
                    <Row>
                      <Col>
                        <div className="   gap-2 d-flex justify-content-sm-end ">
                          <button
                            className="  btn p-2 me-md-2 bg-white btn-outline-dark"
                            onClick={() => navigate("/Productlist")}
                            type="button"
                          >
                            Cancel
                          </button>
                          <button
                            className="  col-xs-6 col-sm-6 btn p-2 me-md-2 buttoncolor text-white"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Row>
              </div>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default ProductDetail;
