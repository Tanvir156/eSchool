import React from "react";
import CourseCard from "./CourseCard";
import img from "./../e-school-resources-master/Photos/Morder pychons.png";
import img1 from "./../e-school-resources-master/Photos/Morder pyschology.png";
import img2 from "./../e-school-resources-master/Photos/Morder psyc.png";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Divider from "@mui/material/Divider";

const Courses = () => {
  return (
    <div style={{ margin: "30px" }}>
      <h1
        className="d-flex justify-content-center"
        style={{
          letterSpacing: "3px",
          fontFamily: "system-ui",
          margin: "50px",
        }}
      >
        ONLINE COURSES
      </h1>
      <Row>
        <Col>
          <CourseCard img={img} tittle="Web Design" />
        </Col>

        <Col>
          <CourseCard img={img1} tittle="Graphic Design" />
        </Col>
        <Col>
          <CourseCard img={img2} tittle="Digital Marketing" />
        </Col>
      </Row>
      <Divider />
    </div>
  );
};

export default Courses;
