import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Image from "react-bootstrap/Image";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

const News = () => {
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

      <div className="Picture bg-secondary " style={{ height: "100%" }}>
        <Image
          src="https://image.deemples.com/wp-content/uploads/2018/06/tourism-malaysia.jpg"
          width="90%"
          height="500px"
          alt="description of the image"
        />
      </div>
    </div>
  );
};

export default News;
