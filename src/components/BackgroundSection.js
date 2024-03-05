import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function BackgroundSection() {
  return (
    <div className="bg-primary text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      {/* Adjust the opacity by changing the alpha value (0.5 in this example) */}
      <Container fluid>
        <Row>
          <Col>
            <h1>Welcome to Instacart</h1>
            <p>Shop groceries online and get them delivered to your doorstep!</p>
            <Button variant="light">Get Started</Button>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Find Your Address</Card.Title>
                <Card.Text>
                  Enter your address to see what's available near you.
                </Card.Text>
                {/* Import Form component from react-bootstrap */}
                <Form>
                  <Form.Group controlId="formAddress">
                    <Form.Control type="text" placeholder="Enter your address" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Search
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BackgroundSection;


