
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function StoreListings() {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Store 1</Card.Title>
              <Card.Text>Store description goes here.</Card.Text>
              <Button variant="primary">Go to Store</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Store 2</Card.Title>
              <Card.Text>Store description goes here.</Card.Text>
              <Button variant="primary">Go to Store</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Store 3</Card.Title>
              <Card.Text>Store description goes here.</Card.Text>
              <Button variant="primary">Go to Store</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default StoreListings;