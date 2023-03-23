import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";

function CourseCard(props) {
  return (
    <Card style={{ width: "21rem", marginBottom: "25px" }}>
      <Card.Img variant="top" src={props.img} style={{ padding: "15px" }} />
      <Card.Body>
        <Card.Title style={{ fontSize: "2.25rem", fontFamily: "sans-serif" }}>
          {props.tittle}
        </Card.Title>
        <Card.Text>Degisnation</Card.Text>
        <Button
          variant="success"
          style={{ border: "none", borderRadius: "10px" }}
        >
          Enroll Now
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <p style={{ padding: "8px" }}>
            <CalendarMonthIcon fontSize="small" /> start 20April,2023
          </p>
          <p>
            <PeopleIcon fontSize="small" /> 60 seat
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
