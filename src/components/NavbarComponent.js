import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; 

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Fragancias Eunoia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Enlaces del diagrama */}
            <Nav.Link href="#compare">Comparar Precios</Nav.Link>
            <Nav.Link href="#login">Iniciar Sesión</Nav.Link>
            <Nav.Link href="#cart">Carrito</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
