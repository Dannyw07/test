import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "./AvailableTime.css";
import Checkbox from "@mui/material/Checkbox";
import Footer from "../../components/Footer/Footer";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import { faPerson, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

// const data = [
//   { name: "8:00 AM", age: "Available", gender: "Male" },
//   { name: "9:00 AM", age: "Closed", gender: "" },
//   { name: "10:00 AM", age: "Unavailable", gender: "" },
//   { name: "11:00 AM", age: "Available", gender: "Male" },
// ];

const AvailableTime = () => {
  const [player, setPlayer] = React.useState("");
  const handleChange2 = (event) => {
    setPlayer(event.target.value);
  };
  const [status, setStatus] = React.useState("");
  const handleChange3 = (event) => {
    setStatus(event.target.value);
  };
  const navigate = useNavigate();
  const handleSelect = () => {
    navigate("/availableTime/slot-1");
  };

  const handleSelect2 = () => {
    navigate("/availableTime/slot-2");
  };

  const handleSearch = () => {
    navigate("/availableTime");
  };
  return (
    <div className="ATimeContainer">
      <Navbar />
      <h1>Available Timeslot</h1>
      <div className="breadcrumb m-3">
        {/* <div role="presentation" onClick={handleClick}> */}
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/booking">
            Booking
          </Link>
          <Link underline="hover" color="inherit" href="/availableTime">
            Available Time
          </Link>
        </Breadcrumbs>
        {/* </div> */}
      </div>

      {/* <div className="Time">
        <table>
          <tr>
            <th>Time</th>
            <th>Status</th>
            <th>Checkbox</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
              </tr>
            );
          })}
        </table>
      </div> */}

      <div className="p-5">
        {/* <h1 className="text-start px-2 ">Hello this is Booking page</h1> */}

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

            {/* <div
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
            </div> */}

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
            <div
              className="headerSearchItem d-flex align-items-center gap-10 "
              style={{ height: "70px", color: "lightgray" }}
            >
              <FontAwesomeIcon icon={faCircleCheck} />
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={status}
                  label="status"
                  onChange={handleChange3}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={50}>Available</MenuItem>
                  <MenuItem value={60}>Closed</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="headerSearchItem d-flex align-items-center gap-10 ">
              <button
                className="headerBtn p-10 fw-500 border-0 bg-primary rounded"
                style={{ height: "60px", width: "140px", color: " white" }}
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="AtimeContent">
        <FontAwesomeIcon
          icon={faFire}
          style={{ color: "#f8f9fc", fontSize: "40px" }}
        />
        <h1>Hot Deals Today</h1>
      </div>
      <div className="availabletimeSlots col-md m-5 d-flex gap-5">
        {/* <div
          className="bg-secondary bg-gradient rounded "
          style={{ width: "250px", height: "175px" }}
        >
          <div className="slot-1">
            <div className=" justify-content-center ">
              <div className="hotdeals">
                <FontAwesomeIcon icon={faFire} style={{ color: "#f8f9fc" }} />
                <h2 className="time">08:00 AM</h2>
              </div>
              <div className="slotOneContent">
                <h3>1-2 Players</h3>
                <h3>11 Holes</h3>
              </div>
              <div className="AtimeStatus">
                <h3>Status:</h3>
                <h5 className="status2"> Available</h5>
              </div>
            </div>
          </div>

          <div className="slot-1">
            <div className=" justify-content-center ">
              <div className="hotdeals">
                <FontAwesomeIcon icon={faFire} style={{ color: "#f8f9fc" }} />
                <h2 className="time">08:00 AM</h2>
              </div>
              <div className="slotOneContent">
                <h3>1-2 Players</h3>
                <h3>11 Holes</h3>
              </div>
              <div className="AtimeStatus">
                <h3>Status:</h3>
                <h5 className="status2"> Available</h5>
              </div>
            </div>
          </div>
        </div> */}

        <div className="slot-1" onClick={handleSelect}>
          <div className=" justify-content-center ">
            <div className="hotdeals">
              <FontAwesomeIcon icon={faFire} style={{ color: "#f8f9fc" }} />
              <h2 className="time">08:00 AM</h2>
            </div>
            <div className="slotOneContent">
              <h3>1-2 Players</h3>
              <h3>18 Holes</h3>
            </div>
            <div className="AtimeStatus">
              <h3>Status:</h3>
              <h5 className="status2"> Available</h5>
            </div>
          </div>
        </div>

        <div className="slot-2">
          <div className=" justify-content-center ">
            <div className="hotdeals">
              <FontAwesomeIcon icon={faFire} style={{ color: "#f8f9fc" }} />
              <h2 className="time">9:45 AM</h2>
            </div>
            <div className="slotOneContent">
              <h3>1-4 Players</h3>
              <h3>9 Holes</h3>
            </div>
            <div className="AtimeStatus">
              <h3>Status:</h3>
              <h5 className="status3"> Closed</h5>
            </div>
          </div>
        </div>

        <div className="slot-1" onClick={handleSelect2}>
          <div className=" justify-content-center ">
            <div className="hotdeals">
              <FontAwesomeIcon icon={faFire} style={{ color: "#f8f9fc" }} />
              <h2 className="time">10:00 AM</h2>
            </div>
            <div className="slotOneContent">
              <h3>1-4 Players</h3>
              <h3>9 Holes</h3>
            </div>
            <div className="AtimeStatus">
              <h3>Status:</h3>
              <h5 className="status2"> Available</h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AvailableTime;
