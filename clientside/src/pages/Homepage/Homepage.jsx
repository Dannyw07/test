import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Carousell from "../../components/Carousel/Carousell";
import Footer from "../../components/Footer/Footer";
import MainContainer from "../../components/MainContainer/MainContainer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="homepageContainer">
        <MainContainer />
        <br />
        <Carousell />
      </div>

      <h1>Features</h1>
      <Footer />
    </div>
  );
};

export default Homepage;
