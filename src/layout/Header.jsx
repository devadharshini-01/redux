import { useNavigate } from "react-router-dom";
import { Container, NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Icon } from "@iconify/react";
import logo from "../images/logo-removebg-preview.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar className="Header" variant="dark" expand="lg">
        <img className="navimage ms-2" src={logo}></img>
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar-dark-example " />
          <Navbar.Collapse
            className="justify-content-end"
            id="navbar-dark-example "
          >
            <Nav>
              <span>
                <Icon
                  className="mb-2 me-2 mt-2 text-white"
                  icon="codicon:account"
                  width="20"
                  height="20"
                />
              </span>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Admin"
                menuVariant="dark"
              >
                <NavDropdown.Item
                  onClick={() => navigate("/")}
                  href="#action/3.1"
                >
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
