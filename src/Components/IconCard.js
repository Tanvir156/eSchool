import React from "react";
import Cardd from "./Cardd";
import img1 from "./../e-school-resources-master/ICON/book.png";
import img2 from "./../e-school-resources-master/ICON/calendar.png";
import img3 from "./../e-school-resources-master/ICON/Student.png";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const IconCard = () => {
  return (
    <div style={{ margin: "60px" }}>
      <Row>
        <Col>
          <Cardd
            img={img1}
            tittle="Book"
            desc="We have a lot of resource of book"
          />
        </Col>
        <Col>
          <Cardd
            img={img2}
            tittle="Calender"
            desc="We have a lot of resource of book"
          />
        </Col>
        <Col>
          <Cardd
            img={img3}
            tittle="Student"
            desc="We have a lot of resource of book"
          />
        </Col>
        <Col>
          <Cardd
            img={img1}
            tittle="Calender"
            desc="We have a lot of resource of book"
          />
        </Col>
      </Row>
    </div>
  );
};

export default IconCard;
