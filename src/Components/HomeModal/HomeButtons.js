import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./HomeButtons.css";

const buttonInfo = [
  {
    id: 1,
    title: "Descubre nuestro mundo de películas",
    text: "Navega a través de nuestra selección cuidadosamente curada y descubre títulos que te harán reír, llorar, reflexionar y soñar. Con una interfaz amigable y fácil de usar, podrás buscar y encontrar tus películas favoritas en cuestión de segundos.",
  },
  {
    id: 2,
    title: "Acceso sin límites, en cualquier lugar y momento",
    text: "Ya sea desde tu computadora, tablet o móvil, accede a nuestrocontenido en cualquier momento. Con CineVisión, las mejoreshistorias están a solo un clic de distancia.",
  },
  {
    id: 3,
    title: "Comienza tu viaje cinematográfico ahora",
    text: "Explora, disfruta y sumérgete en el infinito universo del cine conCineVisión. ¡La magia del cine te espera!",
  },
];

export default function ButtonModalHome(props) {
  const numButton = buttonInfo.length;

  return (
    <>
      {numButton > 0
        ? buttonInfo.map((button) => (
            <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <div
                style={{
                  backgroundColor: "#BA7AFF",
                }}
              >
                <Modal.Header
                  closeButton
                  style={{ borderBottom: "1px solid black" }}
                >
                  <Modal.Title id="contained-modal-title-vcenter">
                    <h4>{button.title}</h4>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ border: "none" }}>
                  <p>{button.text}</p>
                </Modal.Body>
                <Modal.Footer
                  style={{ border: "none", justifyContent: "center" }}
                >
                  <Button
                    onClick={props.onHide}
                    style={{ backgroundColor: "#633FFE" }}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </div>
            </Modal>
          ))
        : null}
    </>
  );
}
