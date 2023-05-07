import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "./AvailableTime.css";
import Checkbox from "@mui/material/Checkbox";
import Footer from "../../components/Footer/Footer";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const data = [
  { name: "8:00 AM", age: "Available", gender: "Male" },
  { name: "9:00 AM", age: "Closed", gender: "" },
  { name: "10:00 AM", age: "Unavailable", gender: "" },
  { name: "11:00 AM", age: "Available", gender: "Male" },
];

const AvailableTime = () => {
  return (
    <div>
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

      <div className="Time">
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
      </div>
    </div>
  );
};

export default AvailableTime;
