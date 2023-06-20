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
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function valuetext(value) {
  return `${value}°C`;
}
const Gallery = () => {
  const navigate = useNavigate();
  const [teetime, setTeetime] = useState([]);
  const [hotdeal, setHotdeal] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/hotdeals")
      .then((res) => res.json())
      .then((data) => setHotdeal(data))
      // .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    fetch("http://localhost:3001/teetimes")
      .then((res) => res.json())
      .then((data) => setTeetime(data))
      // .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
  const [activeContent, setActiveContent] = useState("18");
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
          {hotdeal.map((item, index) => (
            <div className="slot-1" key={index}>
              <div className=" justify-content-center ">
                <div className="hotdeals">
                  <FontAwesomeIcon icon={faFire} style={{ color: "#f8f9fc" }} />
                  <h2 className="time">{item.hotdeal_time}</h2>
                </div>
                <div className="slotOneContent">
                  <h3>{item.hotdeal_Nop}</h3>
                  <h3>{item.hotedeal_Holes} Holes</h3>
                </div>
                <div className="AtimeStatus">
                  <h3>Status:</h3>
                  <h5 className="status2"> {item.hotdeal_status}</h5>
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
              <DatePicker closeOnSelect={true} disablePast={true} />
            </LocalizationProvider>
          </div>
          <div className="divDates">
            <div className="divInfo">
              <div className="tarikh-1">Time</div>
              <div className="tarikh-2">07:00 - 20:00</div>
            </div>
            <Box sx={{ width: 406 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Box>
          </div>

          <div className="divSelect">
            <div className="divOne">
              {/* <p>18 Holes</p> */}
              <button
                className="eighteenholes"
                onClick={() => setActiveContent("content1")}
              >
                18 Holes
              </button>
            </div>
            <div className="divTwo">
              <button
                className="nineholes"
                onClick={() => setActiveContent("content2")}
              >
                9 Holes
              </button>
              {/* <p>9 Holes</p> */}
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
                <p>{item.tt_time}</p>
              </div>
            ))}
          </div>
          {/* {activeContent === "content1" && <div>Content 1</div>} */}
          {activeContent === "content2" && <div>Content 2</div>}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
