import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const sampleProducts = [
  { id: 1, name: 'Aroma Nocturno', price: 75, description: 'Esencia profunda e intensa.' },
  { id: 2, name: 'Brisa de Verano', price: 50, description: 'Fresco y ligero para el día.' },
  { id: 3, name: 'Seducción', price: 120, description: 'Fragancia premium de larga duración.' },
];

const ProductListings = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Catálogo de Fragancias</h2>
      <Row>
        {sampleProducts.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">Añadir al Carrito</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductListings;
