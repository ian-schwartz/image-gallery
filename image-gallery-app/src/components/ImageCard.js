import React from "react";
import { Container, CardGroup, Card, Button } from "react-bootstrap";

const ImageCard = ({ image }) => {
  return (
    <Container className="container">
      <CardGroup>
        <Card
          style={{ margin: "25px", fontFamily: "Roboto" }}
          bg="dark"
          text="light"
        >
          <Card.Img
            variant="top"
            src={image.urls.regular}
            alt={image.alt_description}
          />
          <Card.Body>
            <Card.Title>{image.description}</Card.Title>
            <Card.Text>
              Photo by{" "}
              <a
                href={image.user.portfolio_url}
                style={{ color: "#f8f9fa" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {image.user.name}
              </a>
            </Card.Text>
            <Button
              variant="secondary"
              href={image.links.html}
              target="_blank"
              rel="noopener noreferrer"
            >
              See on Unsplash
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default ImageCard;
