import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./gal.css";
import "../AvailableTime/AvailableTime.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
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
          <div className="slot-1">
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
          <div className="slot-1">
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
          <div className="slot-1">
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
          <div className="slot-1">
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
          <div className="slot-1">
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
          <div className="slot-1">
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
          <div className="slot-1">
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
        </Carousel>
      </div>

      {/* <div className="normalRate">
        <h1>Tee Times Starting From RM185</h1>
        <div className="column">
          <div className="avTeetime">
            <p>07:20</p>
          </div>
          <div className="avTeetime">
            <p>07:20</p>
          </div>
          <div className="avTeetime">
            <p>07:20</p>
          </div>
          <div className="avTeetime">
            <p>07:20</p>
          </div>
          <div className="avTeetime">
            <p>07:20</p>
          </div>
          <div className="avTeetime">
            <p>07:20</p>
          </div>
          <div className="avTeetime">
            <p>07:20</p>
          </div>
          <div className="avTeetime">
            <p>07:20</p>
          </div>
          <div className="avTeetime">
            <p>07:20</p>
          </div>
          <div className="avTeetime">
            <p>07:20</p>
          </div>
        </div>
      </div> */}

      <div className="leftNav">
        <div className="divDate">
          <div className="tarikh"></div>
        </div>
        <div className="divDate">
          <div className="tarikh"></div>
        </div>

        <div className="divSelect">
          <div className="divOne">
            <p>18 Holes</p>
          </div>
          <div className="divTwo">9 Holes</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
