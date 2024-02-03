import { Col, Container, Form, NavDropdown, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logo-removebg-preview.png";
import { Icon } from '@iconify/react';
import { Navigate, useNavigate } from 'react-router-dom';

const Header = ()=>{
  const navigate = useNavigate();
    return(
        <>
    {/* <Navbar className="Header p-0 ">
   

    <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Container>
          <Form.Label className="admin text-danger"><span><Icon className='mb-2 me-2 ' icon="codicon:account" width="20" height="20"   /></span>Admin</Form.Label>
          </Container>
          </Navbar.Text>
          
        </Navbar.Collapse>
      
        <Navbar.Toggle />
    
    </Navbar> */}
        
        <Navbar className='Header' variant="dark"  expand="lg">
        <img className="navimage ms-2" src={logo}></img>
      <Container fluid>

        <Navbar.Toggle aria-controls="navbar-dark-example " />
        <Navbar.Collapse className='justify-content-end' id="navbar-dark-example ">
          <Nav>
          <span><Icon className='mb-2 me-2 mt-2 text-white' icon="codicon:account" width="20" height="20"   /></span>
            <NavDropdown 
         
              id="nav-dropdown-dark-example"
              title ="Admin"
              menuVariant="dark"
            >
              <NavDropdown.Item   onClick={() => navigate("/")} href="#action/3.1">Log out</NavDropdown.Item>
           
     
            
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      

        </>
    )
}
export default Header;