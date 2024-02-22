import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Video from "../../assets/videos/StarWars.mp4";

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
        <Modal.Body style={{ border: "none", textAlign: "center" }}>
          <video width="350" height="250" controls>
            <source src={Video} type="video/mp4" />
          </video>
        </Modal.Body>
        <Modal.Footer style={{ border: "none" }}>
          <Button onClick={props.onHide} style={{ backgroundColor: "#633FFE" }}>
            Close
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}
