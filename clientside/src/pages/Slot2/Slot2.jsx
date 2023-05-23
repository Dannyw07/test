import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./slot2.css";
import {
  faCalendarDays,
  faGolfBallTee,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/Footer/Footer";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import { color } from "framer-motion";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
const Slot2 = () => {
  const [value, setValue] = React.useState(4);
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="TT">
      <Navbar />
      <div className="TeetimeContainer">
        <h1>Tee Time</h1>
        <div className="Breadcrumb">
          <div className="breadcrumb m-3">
            {/* <div role="presentation" onClick={handleClick}> */}
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/booking">
                Booking
              </Link>
              <Link underline="hover" color="inherit" href="/availableTime">
                Available Time
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/availableTime/slot-2"
              >
                10:00AM
              </Link>
            </Breadcrumbs>
            {/* </div> */}
          </div>
        </div>

        <div className="TeetimeForm">
          <div className="TeeTimeTitle">
            <FontAwesomeIcon
              icon={faHouse}
              style={{
                "--fa-primary-color": "#ffffff",
                "--fa-secondary-color": "#ffffff",
                fontSize: "30px",
              }}
            />
            <h2>Kinabalu GolfClub</h2>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating name="read-only" value={value} readOnly />
            </Box>
          </div>

          <div className="TeeTimes">
            <div className="FormDate">
              <p>
                Date <FontAwesomeIcon icon={faCalendarDays} /> 10:00 AM
              </p>
            </div>
            <p>|</p>
            <div className="FormDate">
              <p>Friday May 19,2023</p>
            </div>
            <div className="FormDate">
              <p>
                <FontAwesomeIcon icon={faGolfBallTee} /> 18 Holes
              </p>
            </div>
          </div>
          <div className="break"></div>
          <div className="hotdealSection">
            <h3>Hot Deal</h3>
            <div className="hotdealContent">
              <p className="pill1">HOT DEAL - Prepaid Time</p>
              <p className="pill2">Cart included</p>
            </div>
          </div>
          <div className="break"></div>

          <div className="golfers">
            <h3>Golfers</h3>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
              color="primary"
            >
              <ToggleButton value="1" aria-label="left aligned">
                <LooksOneIcon />
              </ToggleButton>
              <ToggleButton value="2" aria-label="centered">
                <LooksTwoIcon />
              </ToggleButton>
              <ToggleButton value="3" aria-label="centered">
                <Looks3Icon />
              </ToggleButton>
              <ToggleButton value="4" aria-label="right aligned">
                <Looks4Icon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="break"></div>
          <div className="Fees">
            <p>
              Greens Fees (1 player x Rm20.99) &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; Rm20.99
            </p>
            <p>
              Convenience Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; Rm3.49
            </p>
            <p>
              Estimated Taxes &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Rm2.02
            </p>
            <h5>
              Total &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;RM26.50
            </h5>
          </div>
          <div className="break"></div>
          <div className="ReserveNow">
            <h2>Total: RM26.50</h2>
            <div className="button">
              <button>Continue to Book</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Slot2;
