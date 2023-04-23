import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Carousell from "../../components/Carousel/Carousell";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="homepageContainer">
        <h1>title</h1>
        <h2>home</h2>
        <Carousell />
      </div>

      <h1>Features</h1>
    </div>
  );
};

export default Homepage;
