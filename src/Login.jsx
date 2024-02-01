import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import dmart from "../src/images/dmart.png";
import axios from "axios";
const Login = () => {
  const [view, setView] = useState(false);
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
const handleLogin=(event)=>{
  setLogin({...login,[event.target.name]:event.target.value})
}

    
  return (
    <>
      <div className="homebanner">
        <Card className="card ">
          <img className="image  " src={require("../src/images/logo-removebg-preview.png")} />
          <Form className="p-3 ">
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>Email </Form.Label>
              <Form.Control 
              type="email" 
              placeholder="Email" 
              className="p-3"
              onChange={(e) => handleLogin(e)}
               />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <InputGroup className="mb-3 ">
                <Form.Control
                  placeholder="Password"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className=" inputgroup p-3"
                  onChange={(e)=>handleLogin(e)}
                  type={view ? "text" : "password"}
                />
                <InputGroup.Text id="basic-addon2">
                  <span className="cursor: pointer icon ">
                    {view ? (
                      <Icon
                        icon="lets-icons:view"
                        width="20"
                        height="20"
                        onClick={() => setView(false)}
                      />
                    ) : (
                      <Icon
                        icon="carbon:view-off"
                        width="20"
                        height="20"
                        onClick={() => setView(true)}
                      />
                    )}
                  </span>
                </InputGroup.Text>
              </InputGroup>

              <div className="row">
                <div className="col-8"></div>
                <div className=" col-sm-4 col-md-4 col-lg-4 col-xl-4">
                  <Form.Label className="text-color text-primary">
                    Forget Password?
                  </Form.Label>
                </div>
              </div>
              <Button
                onClick={() => navigate("/Productlist")}
                className="mt-4 mx-auto w-75 p-1  text-white display "
              >
                Sign in
              </Button>
            </Form.Group>
          </Form>
          <Form.Label className="text-center  text-color mb-4">
            Don't have an account?<span className="text-primary">Sign up</span>
          </Form.Label>
        </Card>
      </div>
    </>
  );
};
export default Login;
