import React from "react";
import "./rv2.css";
// import Navbar from "../../components/Navbar/Navbar";
import Avatar2 from "../../components/Images/pngegg.png";
import FooterV2 from "../../components/Footerv2/FooterV2";
import NavbarV2 from "../../components/Navbarv2/Navbarv2";

const ReviewV2 = () => {
  return (
    <div className="rv2">
      <NavbarV2 />
      <div className="topTitle">COMMENTS</div>
      <div className="clientSayBox">
        <div className="clientSay">
          <h2>Clients Says</h2>
        </div>
      </div>

      <div className="usersComments">
        <div className="usersGrid">
          <div className="userSections">
            <div className="userAvatar">
              <img src={Avatar2} alt="" className="AvatarTwo" />
              <p>Anonymous</p>
            </div>
            <div className="userTexts"></div>
          </div>
          <div className="userSections">
            <div className="userAvatar">
              <img src={Avatar2} alt="" className="AvatarTwo" />
              <p>Anonymous</p>
            </div>
            <div className="userTexts"></div>
          </div>
          <div className="userSections">
            <div className="userAvatar">
              <img src={Avatar2} alt="" className="AvatarTwo" />
              <p>Anonymous</p>
            </div>
            <div className="userTexts"></div>
          </div>
          <div className="userSections">
            <div className="userAvatar">
              <img src={Avatar2} alt="" className="AvatarTwo" />
              <p>Anonymous</p>
            </div>
            <div className="userTexts"></div>
          </div>
          <div className="userSections">
            <div className="userAvatar">
              <img src={Avatar2} alt="" className="AvatarTwo" />
              <p>Anonymous</p>
            </div>
            <div className="userTexts"></div>
          </div>
        </div>
      </div>
      <FooterV2 />
    </div>
  );
};

export default ReviewV2;
