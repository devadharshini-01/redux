import { Col, Container, Form, NavDropdown, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logo-removebg-preview.png";
import { Icon } from '@iconify/react';

const Header = ()=>{

    return(
        <>
    <Navbar className="Header p-0">
   
    <img className="navimage ms-2" src={logo}></img>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Container>
          <Form.Label className="admin text-danger"><span><Icon className='mb-2 me-2 ' icon="codicon:account" width="20" height="20"   /></span>Admin</Form.Label>
          </Container>
          </Navbar.Text>
          
        </Navbar.Collapse>
      
    </Navbar>
        
        
      

        </>
    )
}
export default Header;