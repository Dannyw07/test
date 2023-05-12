import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Image from "react-bootstrap/Image";
import Footer from "../../components/Footer/Footer";
import { Blurhash, BlurhashCanvas } from "react-blurhash";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
import picThree from "../../components/Images/imageOne.webp"; // with import
const News = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div>
      <Navbar />

      {/* <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav> */}

      <div className="Picture ">
        <Image
          src="https://image.deemples.com/wp-content/uploads/2018/06/tourism-malaysia.jpg"
          width="90%"
          height="500px"
          alt="description of the image"
        />

        <div className="content bg-light mx-5 min-vh-100 d-flex justify-content-between g-0 ">
          <div
            className="col-4 mt-5 mx-5 align-items-center bg-primary  rounded-3"
            style={{
              height: "700px",
              width: "400px",
            }}
          >
            <Image
              src="https://cdn.shopify.com/s/files/1/0512/8709/7512/products/astrox100game2_1200x1200.jpg?v=1644920331"
              width="400px"
              height="500px"
              alt="description of the image"
            />
          </div>
          <div
            className="col-4 mt-5 mx-5  align-items-center bg-primary  rounded-3"
            style={{ height: "700px", width: "400px" }}
          >
            <Image
              src="https://cdn.shopify.com/s/files/1/0512/8709/7512/products/astrox100game1_480x.jpg?v=1644920320"
              width="400px"
              height="500px"
              alt="description of the image"
            />
          </div>
          <div
            className="col-4 mt-5 mx-5  align-items-center bg-primary rounded-3"
            style={{
              height: "700px",
              width: "400px",
              display: !imageLoaded ? "inline" : "none",
            }}
          >
            <BlurhashCanvas
              hash="L8S~x5s:Rjxuxuayayj[_Nbbt7V@"
              width={400}
              height={700}
            />
            <Image
              src={picThree}
              width="400px"
              height="500px"
              alt="description of the image"
              onLoad={() => {
                setImageLoaded(true);
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
