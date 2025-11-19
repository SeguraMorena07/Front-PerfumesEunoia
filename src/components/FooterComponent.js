import React from 'react';
import { Container } from 'react-bootstrap';

const FooterComponent = () => {
  // bg-dark: fondo oscuro | text-white: texto blanco | py-3: padding vertical | fixed-bottom: lo fija al fondo de la ventana
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <p className="mb-0">
          © {new Date().getFullYear()} Fragancias Eunoia. | Proyecto Final - Programación Web
        </p>
      </Container>
    </footer>
  );
};

export default FooterComponent;

