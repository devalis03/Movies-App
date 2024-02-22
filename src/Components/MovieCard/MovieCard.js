import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "../CardModal/CardModal";

export default function CardMovies({ movieObj }) {
  const movie = movieObj;
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Card
        style={{
          width: "18rem",
          backgroundColor: "#BA7AFF",
          //9932CC
          color: "white",
        }}
        className="me-5 mt-3 text-center"
      >
        <Card.Img variant="top" src={movieObj.poster} />
        <Card.Body>
          <Card.Title>{movieObj.title}</Card.Title>
          <Card.Subtitle className="mb-2">{movieObj.genre}</Card.Subtitle>
          <Card.Text>{movieObj.year}</Card.Text>
          <Card.Text>{movieObj.plot}</Card.Text>
          <Button
            // variant="secondary"
            style={{
              borderRadius: "50%",
              border: "none",
              fontSize: "20px",
              padding: "15px",
              backgroundColor: "#633FFE",
            }}
            onClick={() => setModalShow(true)}
          >
            More Info
          </Button>
        </Card.Body>
      </Card>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        movieObject={movie}
      />
    </>
  );
}
