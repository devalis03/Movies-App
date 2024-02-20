import Carousel from "react-bootstrap/Carousel";
import SliderImg1 from "../../assets/images/FightClubWallpaper.jpg";
import SliderImg2 from "../../assets/images/HarryPotter1Wallpaper.jpg";
import SliderImg3 from "../../assets/images/TheGodfatherWallpaper.jpg";
import "./Carousel.css";

function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item interval={1000}>
        <img src={SliderImg1} className="slider-img" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={SliderImg2} className="slider-img" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={SliderImg3} className="slider-img" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
