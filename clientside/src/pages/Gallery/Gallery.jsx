import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./gal.css";
import "../AvailableTime/AvailableTime.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const teetime = [
  {
    time: "07:30",
  },
  {
    time: "07:45",
  },
  {
    time: "08:00",
  },
  {
    time: "08:15",
  },
  {
    time: "08:30",
  },
  {
    time: "08:45",
  },
];

const hotDeals = [
  {
    hdTime: "08:00",
    noPlayer: "1-2 players",
    noHoles: 18,
    status: "Available",
  },
  {
    hdTime: "08:15",
    noPlayer: "1-4 players",
    noHoles: 9,
    status: "Available",
  },
  {
    hdTime: "08:30",
    noPlayer: "1-2 players",
    noHoles: 18,
    status: "Available",
  },
  {
    hdTime: "08:45",
    noPlayer: "1-2 players",
    noHoles: 9,
    status: "Available",
  },
  {
    hdTime: "09:00",
    noPlayer: "1-2 players",
    noHoles: 9,
    status: "Available",
  },
  {
    hdTime: "09:15",
    noPlayer: "1-2 players",
    noHoles: 9,
    status: "Available",
  },
];
const Gallery = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1249 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="gal">
      <Navbar />

      <div className="hotDealDashBoard">
        <FontAwesomeIcon
          icon={faFire}
          style={{ color: "#f8f9fc", fontSize: "40px" }}
        />
        <h1>Hot Deals Today</h1>
      </div>

      <div className="GalContainer">
        <Carousel
          responsive={responsive}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          rewind={true}
          rewindWithAnimation={true}
        >
          {hotDeals.map((item, index) => (
            <div className="slot-1" key={index}>
              <div className=" justify-content-center ">
                <div className="hotdeals">
                  <FontAwesomeIcon icon={faFire} style={{ color: "#f8f9fc" }} />
                  <h2 className="time">{item.hdTime}</h2>
                </div>
                <div className="slotOneContent">
                  <h3>{item.noPlayer}</h3>
                  <h3>{item.noHoles} Holes</h3>
                </div>
                <div className="AtimeStatus">
                  <h3>Status:</h3>
                  <h5 className="status2"> {item.status}</h5>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="Navigation">
        <div className="leftNav">
          <div className="divDate">
            {/* <div className="tarikh"></div> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </div>
          <div className="divDate">{/* <div className="tarikh"></div> */}</div>

          <div className="divSelect">
            <div className="divOne">
              <p>18 Holes</p>
            </div>
            <div className="divTwo">
              <p>9 Holes</p>
            </div>
          </div>
          <hr
            style={{
              width: "406px",
              background: "black",
              height: "2px",
              border: "none",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />

          <div className="filterTeetime">
            <p>Group Tee Times By</p>
          </div>

          <div className="divSelect">
            <div className="divOne">
              <p>Price</p>
            </div>
            <div className="divTwo">
              <p>Time</p>
            </div>
          </div>

          <hr
            style={{
              width: "406px",
              background: "black",
              height: "2px",
              border: "none",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />

          <button className="refreshTeeTime">REFRESH TEE TIME</button>
        </div>

        <div className="rightNav">
          <h3>TEE TIMES FROM RM185</h3>
          <div className="column">
            {teetime.map((item, index) => (
              <div className="avTeetime" key={index}>
                <p>{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
