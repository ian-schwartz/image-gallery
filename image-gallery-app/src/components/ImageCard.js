import React from "react";
import { Container, CardGroup, Card, Button } from "react-bootstrap";

const ImageCard = ({ image }) => {
  return (
    <Container className="container">
      <CardGroup>
        <Card style={{ margin: "25px", fontFamily: 'Roboto' }} bg="dark" text="light">
          <Card.Img
            variant="top"
            src={image.urls.regular}
            alt={image.alt_description}
          />
          <Card.Body>
            <Card.Title>{image.description}</Card.Title>
            <Card.Text>Photo by {image.user.name}</Card.Text>
            <Button variant="secondary" target="_blank" href={image.links.html}>
              See on Unsplash
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default ImageCard;
