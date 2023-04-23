import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar/Navbar";
import {
  faCalendarDays,
  faGolfBallTee,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Booking = () => {
  const [hole, setHole] = React.useState("");
  const [player, setPlayer] = React.useState("");

  const handleChange1 = (event) => {
    setHole(event.target.value);
  };

  const handleChange2 = (event) => {
    setPlayer(event.target.value);
  };
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <div className="mt-5 p-5">
        <h1 className="text-start px-2 ">Hello this is Booking page</h1>

        <div
          className="headerSearch sticky "
          style={{ position: "sticky -webkit-sticky", top: 0 }}
        >
          <div
            className=" bg-white d-flex align-items-center rounded justify-content-between border border-5 border-solid p-1 mx-auto top-0"
            style={{ height: "80px", width: "70%", color: "#febb02" }}
          >
            <div
              className="headerSearchItem d-flex align-items-center gap-10 "
              style={{ height: "70px", color: "lightgray" }}
            >
              {/* <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" /> */}
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker disablePast />
              </LocalizationProvider>
            </div>

            <div
              className="headerSearchItem d-flex align-items-center gap-10 "
              style={{ height: "70px", color: "lightgray" }}
            >
              <FontAwesomeIcon icon={faGolfBallTee} className="headerIcon" />
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Number of Holes
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={hole}
                  label="Holes"
                  onChange={handleChange1}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={18}>18</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div
              className="headerSearchItem d-flex align-items-center gap-10 "
              style={{ height: "70px", color: "lightgray" }}
            >
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Number of Players
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={player}
                  label="player"
                  onChange={handleChange2}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>1</MenuItem>
                  <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                  <MenuItem value={40}>4</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="headerSearchItem d-flex align-items-center gap-10 ">
              <button
                className="headerBtn p-10 fw-500 border-0 bg-primary rounded"
                style={{ height: "60px", width: "140px", color: " white" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" m5 p-5 bg-secondary ">
        <h2 className="text-start m-5  ">Featured</h2>

        <div className="p-5">
          <h3>Latest News</h3>
          <h4>
            Prepare to have your senses and skills challenged. Now you can
            experience to play at Premier Course!
          </h4>
        </div>
      </div>

      <h1>test</h1>

      <div className=" m5 p-5 bg-secondary ">
        <h2 className="text-start m-5  ">Featured</h2>

        <div className="p-5">
          <h3>Latest News</h3>
          <h4>
            Prepare to have your senses and skills challenged. Now you can
            experience to play at Premier Course!
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Booking;
