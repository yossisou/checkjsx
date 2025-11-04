import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
const firstName = "Yosr";

const App = () => {
  let greeting;

  if (firstName) {
    greeting = `Hello, ${firstName}`;
  } else {
    greeting = "Hello, there!";
  }
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Title>
            <Price />
          </Card.Title>
          <Card.Title>
            <Description />
          </Card.Title>
          <Image />
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <h2>{greeting}</h2>
    </>
  );
};
export default App;
