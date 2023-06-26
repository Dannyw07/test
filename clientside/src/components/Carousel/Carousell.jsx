import React from "react";
import Carousel from "react-bootstrap/Carousel";
import KotaOne from "../../components/Images/KotaOne.jpg"; // with import
import kotaTwo from "../../components/Images/kotaTwo.jpg"; // with import
import pictureTwo from "../../components/Images/pictureTwo.jpeg";

function Carousell() {
  return (
    <Carousel>
      <Carousel.Item style={{ width: "1349px", height: "500px" }}>
        <img
          src={KotaOne}
          alt="First slide"
          style={{ width: "1349px", height: "500px" }}
        />
        <Carousel.Caption>
          <h3>Kinabalu Golfclub</h3>
          <p>A view from Kinabalu GolfClub</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={kotaTwo} alt="Second slide" />

        <Carousel.Caption>
          <h3>Kinabalu Golfclub</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          <p>A view from Kinabalu GolfClub</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 " src={pictureTwo} alt="Third slide" />

        <Carousel.Caption>
          <h3>Kinabalu Golfclub</h3>
          <p>A view from Kinabalu GolfClub</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;
