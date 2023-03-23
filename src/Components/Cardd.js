import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
export default function Cardd(props) {
  return (
    <Card sx={{ maxWidth: 300 }} style={{ marginBottom: "25px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt=""
          style={{ width: "auto", margin: "auto", padding: "25px" }}
        />
        <CardContent style={{ textAlign: "center" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ fontWeight: "bold" }}
          >
            {props.tittle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
