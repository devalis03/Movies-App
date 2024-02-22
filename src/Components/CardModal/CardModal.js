import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

export default function ModalCard(props) {
  return (
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
        <Modal.Header closeButton style={{ borderBottom: "1px solid black" }}>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.movieObject.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ border: "none" }}>
          <ReactPlayer
            url={props.movieObject.trailer}
            width="100%"
            height="400px"
            controls
            playing
          />
          <div style={{ marginTop: "15px", color: "white" }}>
            <ul>
              <li>
                <p>Director: {props.movieObject.director}</p>
              </li>
              <li>
                <p>Actors: {props.movieObject.actors}</p>
              </li>
              <li>
                <p>Length: {props.movieObject.length} minutes</p>
              </li>
              <li>
                <p>Genres: {props.movieObject.genre}</p>
              </li>
              <li style={{ listStyle: "none", textAlign: "center" }}>
                <p>{props.movieObject.plot}</p>
              </li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ border: "none", justifyContent: "center" }}>
          <Button onClick={props.onHide} style={{ backgroundColor: "#633FFE" }}>
            Close
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}
