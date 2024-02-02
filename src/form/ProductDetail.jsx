import { Card, Col, Container, Form, Row } from "react-bootstrap"
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

const ProductForm=({active,setActive})=>{
const navigate=useNavigate();

 
    return(
        <>
         <Header className="Header"/>
      
    
        <Container fluid className="p-0 ">
        <div className="overflow-hidden">
       <Row>
           <div className="col-2 sidebar">
           <div className="d-none d-sm-none d-md-block d-lg-block   sidebar vh-100">
              <Sidebar className="sidebar" active={active} setActive={setActive} />
            </div>
           </div>
           <div className="col-10 mt-3 ">
           <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="h6 form">Title:</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label className="form">Category:</Form.Label>
        <Form.Control type="text"  />
        <Form.Group className="mb-3" controlId="textarea">
        <Form.Label className="form" >Description</Form.Label>
        <Form.Control className="text" as="textarea"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="form">image:</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="form">Price:</Form.Label>
        <Form.Control type="number"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="form">Rating:</Form.Label>
        <Row>
          <Col>
          
          <Form.Label className="form">rate:</Form.Label>
        <Form.Control className="w-25" type="number"  />
          </Col>
          <Col>
          
          <Form.Label className="form">count:</Form.Label>
        <Form.Control className="w-25" type="number"  />
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
     </Form>
     
           </div>
          
         
          
           
 
            </Row>
       </div>
         
            </Container>
          
        </>
    )
}
export default ProductForm;