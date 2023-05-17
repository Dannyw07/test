import React from "react";
import Carousel from "react-bootstrap/Carousel";
import KotaOne from "../../components/Images/KotaOne.jpg"; // with import

function Carousell() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          // src="https://www.golfpass.com/travel-advisor/courses/22525-kinabalu-golf-club"
          src={KotaOne}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Kinabalu Golfclub</h3>
          <p>A view from Kinabalu GolfClub</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://media.gettyimages.com/id/1331553272/photo/viktor-axelsen-of-team-denmark-celebrates-as-he-wins-against-shi-yu-qi-of-team-china-during-a.jpg?s=612x612&w=gi&k=20&c=W8Z-myFQgeYkFidaAI_cAobk8jwLpohWcDWi2-Su5B8="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Viktor Axelsen</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://static01.nyt.com/images/2012/08/06/sports/BADMINTON1/BADMINTON1-superJumbo.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Lin Dan</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;
