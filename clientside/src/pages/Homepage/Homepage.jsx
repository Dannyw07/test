import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Carousell from "../../components/Carousel/Carousell";
import Footer from "../../components/Footer/Footer";
import MainContainer from "../../components/MainContainer/MainContainer";
import PersonOne from "../../components/Images/PersonOne.png";
import "./homepage.css";

const Homepage = () => {
  return (
    <div>
      <Navbar />
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
