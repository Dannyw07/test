import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BackPic from "../../components/Images/pic3.jpeg";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./review.css";

export const Review = () => {
  return (
    <div className="review">
      <Navbar />
      <div className="reviewContainer">
        <div className="reviewMain">
          <img src={BackPic} alt="Golfers" className="mainPic" />
          <h2>Customer Review</h2>
        </div>

        <div className="reviewContent">
          <div className="ratingContent-1"></div>
          <div className="ratingContent-2">
            <div className="overallRating">
              <div className="overallinfo">
                <h3>4.4</h3>
                <div className="ratings">
                  <Stack spacing={1}>
                    <Rating name="size-medium" defaultValue={2} />
                  </Stack>
                </div>
                <p>44 Review(s)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Review"></div>
      </div>
    </div>
  );
};
