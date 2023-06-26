import React from "react";
// import Navbar from "../../components/Navbar/Navbar";
import Carousell from "../../components/Carousel/Carousell";
import Footer from "../../components/Footer/Footer";
import MainContainer from "../../components/MainContainer/MainContainer";
import PersonOne from "../../components/Images/PersonOne.png";
import "./homepage.css";
import Navbarv2 from "../../components/Navbarv2/Navbarv2";

const Homepage = () => {
  return (
    <div>
      <Navbarv2 />
      <div className="homepageContainer">
        <MainContainer />
        <br />
        <Carousell />
      </div>

      <div className="UpcomingEvent">
        <div className="EventTitle">
          <h1>Upcoming Event</h1>
        </div>

        <div className="Events">
          <div className="eventOne">
            <h4>Golf Competition</h4>
            <img src={PersonOne} alt="Golfers" className="golfers" />
          </div>
          <div className="eventOne">
            <h4>Golf Competition</h4>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
