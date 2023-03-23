import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Img from "./../e-school-resources-master/ICON/Logo.png";
import Button from "react-bootstrap/Button";

function BasicExample() {
  return (
    <Navbar expand="lg" style={{ border: "none" }}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Img}
            width="150"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Books</Nav.Link>
            <Nav.Link href="#link">Course</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Others</Nav.Link>
            <Nav.Link href="#link">
              <Button variant="success">Sign In</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
