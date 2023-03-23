import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import Img from "./../e-school-resources-master/Photos/Illustration.png";
function OverView() {
  return (
    <div style={{ background: "#F0FFF0", fontSize: "large" }}>
      <Navbar />
      <Container>
        <Row>
          <Col sm={4}>
            <div style={{ marginTop: "65px" }}>
              <p style={{ color: "red" }}>Are you ready to Learn?</p>
              <h1 style={{ fontWeight: "bold" }}>
                Learn with fun on{" "}
                <span style={{ color: "green" }}>any schedule</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet,consectetur adlipiscing olit.Varius
                blandit facilisis quam neteus.
              </p>
              <Button variant="success">Get Started</Button>
            </div>
          </Col>
          <Col sm={8}>
            <Image src={Img} fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OverView;
