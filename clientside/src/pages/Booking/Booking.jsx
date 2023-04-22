import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar/Navbar";
import {
  faGolfBall,
  faGolfBallTee,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Booking = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Navbar />
      <div className="mt-5 p-5">
        <h1 className="text-start px-2">Hello this is Booking page</h1>

        <div className="headerSearch ">
          <div
            className="bg-white d-flex align-items-center rounded justify-content-between border border-5 border-solid p-1 mx-auto "
            style={{ height: "80px", color: "#febb02" }}
          >
            <div
              className="headerSearchItem d-flex align-items-center gap-10 "
              style={{ height: "70px", color: "lightgray" }}
            >
              <FontAwesomeIcon icon={faGolfBall} className="headerIcon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput border-0 "
              />
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
                  value={age}
                  label="Age"
                  onChange={handleChange}
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
                  value={age}
                  label="Age"
                  onChange={handleChange}
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
    </div>
  );
};

export default Booking;
