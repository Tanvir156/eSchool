import React from "react";
import Container from "react-bootstrap/Container";
import Img from "./../e-school-resources-master/Photos/Man.png";
const TestiMonial = () => {
  return (
    <div style={{ marginBottom: "110px" }}>
      <h1
        className="d-flex justify-content-center"
        style={{
          letterSpacing: "3px",
          fontFamily: "system-ui",
          margin: "50px",
        }}
      >
        Testimonial
      </h1>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={Img}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <p
          style={{
            width: "600px",
            fontFamily: "system-ui",
            fontWeight: "500",
            color: "dimgray",
          }}
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </Container>
    </div>
  );
};

export default TestiMonial;
