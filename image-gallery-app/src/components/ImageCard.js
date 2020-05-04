import React from "react";
import { Container, CardGroup, Card, Button } from "react-bootstrap";

const ImageCard = ({ image }) => {
  return (
    <Container>
      <CardGroup>
        <Card style={{ margin: "25px" }} bg="dark" text="light">
          <Card.Img variant="top" src={image.urls.regular} />
          <Card.Body>
            <Card.Title>{image.description}</Card.Title>
            <Card.Text>Photo by {image.user.name}</Card.Text>
            <Button variant="secondary" href={image.links.html}>
              See on Unsplash
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default ImageCard;
