import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Carousell() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://img.olympicchannel.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/yebnmhlpkjmfs7oxvbzi"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Lee Zii Jia</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
