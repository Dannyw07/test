import React from "react";
import "../MainContainer/mainContainer.css";
import golfPic from "../Images/GolfPic.png";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
const MainContainer = () => {
  const navigate = useNavigate();
  const handleSearching = () => {
    navigate("/booking");
  };
  return (
    <div className="Mcontainer">
      <div className="ContainerItem">
        <div className="ContainerStuff">
          Golf Reservation
          <div className="cItemPic">
            <img src={golfPic} alt="golf" className="pics" />
          </div>
        </div>
        <p className="MainTitle">
          Come join us and Reserve a Tee-time in <span>Kinabalu GolfClub</span>
        </p>

        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>

        <button
          type="button"
          className="reserveButton"
          onClick={handleSearching}
        >
          Reserve Now
        </button>
      </div>
      <div className="ContainerItems"></div>
    </div>
  );
};

export default MainContainer;
