import React from "react";
import NavigationBar from "../Components/Navbar/Navbar";
import Slider from "../Components/Carousel/Carousel";
import ButtonModalHome from "../Components/HomeModal/HomeButtons";
import Button from "react-bootstrap/Button";
import "./Home.css";

export default function MainMenu() {
  const [modalHome, setModalHome] = React.useState(false);

  return (
    <>
      <NavigationBar />
      <Slider />
      <div className="home">
        <div className="home-titles">
          <h1>¡Bienvenidos a CineVisión, tu portal de películas favorito!</h1>
          <h2>
            En CineVisión estamos comprometidos con brindarte la mejor
            experiencia cinematográfica desde la comodidad de tu hogar u
            oficina. Nuestro amor por el séptimo arte nos inspira a ofrecerte un
            extenso catálogo de películas de todos los tiempos, desde los
            clásicos inolvidables hasta los estrenos más recientes.
          </h2>
        </div>

        <div className="home-button">
          <Button
            size="lg"
            className="button-info"
            style={{
              borderRadius: "50%",
              padding: "60px",
              color: "black",
              fontWeight: "bold",
            }}
            onClick={() => setModalHome(true)}
          >
            1
          </Button>
          <Button
            size="lg"
            className="button-info"
            style={{
              borderRadius: "50%",
              padding: "60px",
              color: "black",
              fontWeight: "bold",
            }}
            onClick={() => setModalHome(true)}
          >
            2
          </Button>
          <Button
            size="lg"
            className="button-info"
            style={{
              borderRadius: "50%",
              padding: "60px",
              color: "black",
              fontWeight: "bold",
            }}
            onClick={() => setModalHome(true)}
          >
            3
          </Button>
        </div>

        <ButtonModalHome show={modalHome} onHide={() => setModalHome(false)} />
      </div>
    </>
  );
}
