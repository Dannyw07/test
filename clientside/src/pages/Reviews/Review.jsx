import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BackPic from "../../components/Images/pic3.jpeg";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./review.css";
import Avatar from "../../components/Images/avatar.png";
import Background from "../../components/Images/custreview.jpg";

export const Review = () => {
  return (
    <div className="review">
      <Navbar />
      <div className="reviewContainer">
        <div className="reviewMain">
          <img src={Background} alt="Golfers" className="mainPic" />
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
        <h4 className="reviewtext">See what other people are saying</h4>
        <div className="Review">
          <div className="reviewPart1">
            <img src={Avatar} alt="userpic" className="userAvatar" />
          </div>
          <div className="reviewPart2">
            <h5>Danny Wong Jia Hong</h5>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={4.0}
                precision={0.5}
                readOnly
                size="small"
              />
            </Stack>
            <h3>Title</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptate
              accusantium doloremque laudantium.
            </p>
          </div>
        </div>
        <br />
        <div className="Review">
          <div className="reviewPart1">
            <img src={Avatar} alt="userpic" className="userAvatar" />
          </div>
          <div className="reviewPart2">
            <h5>Danny Wong Jia Hong</h5>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
                size="small"
              />
            </Stack>
            <h3>Title</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptate
              accusantium doloremque laudantium.
            </p>
          </div>
        </div>
        <br />
        <div className="Review">
          <div className="reviewPart1">
            <img src={Avatar} alt="userpic" className="userAvatar" />
          </div>
          <div className="reviewPart2">
            <h5>Danny Wong Jia Hong</h5>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={2.0}
                precision={0.5}
                readOnly
                size="small"
              />
            </Stack>
            <h3>Title</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptate
              accusantium doloremque laudantium.
            </p>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};
