import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../Navbar/navbar.css";
import {
  faCartShopping,
  faRightFromBracket,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../Images/avatar.png";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useOnHoverOutside } from "../../hooks/useOnHoverOutside.js";
import Menu from "../menu/menu";
// import Menu from "../../components/menu";

//import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  // const [showLinks, setShowLinks] = useState(false);
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
      toast.success("Login Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setIsMenu(!isMenu);
    }
  };

  const [isMenu, setIsMenu] = useState(false);
  const handleCreateItem = () => {
    navigate("/createItem");
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
    toast.success("Logout Successfully!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="Navbar">
      <div className="leftSide">
        {/* <div className="links" id={showLinks ? "hidden" : ""}> */}
        <div className="links">
          <Link to="/">Home</Link>

          <Link to="/booking">Booking</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/review">Review</Link>
          {/* <Link to="/gallery">Gallery</Link> */}
        </div>
      </div>
      <div className="rightSide">
        <div className="links-2">
          {/* <FontAwesomeIcon icon={faBell} /> */}
          <div className="cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#ffffff" }}
            />
            <div
              className=" rounded-circle bg-danger  "
              style={{ width: "25px", height: "25px" }}
            >
              <p className="paragraphColor">1</p>
            </div>
          </div>

          {/* <Link to="/register">Sign Up</Link>
          <Link to="/login">Login</Link> */}

          <div className="LoginButton">
            <button type="submit" className="loginBut">
              Login
            </button>
          </div>

          {/* <div className="userSection">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt="userProfile"
              className="userprof"
              onClick={login}
            />
            <ToastContainer />

            {isMenu && (
              <motion.div
                className="userMenu"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
              >
                {user && user.email === "bi19110060@student.ums.edu.my" && (
                  <p className="menuList" onClick={handleCreateItem}>
                    Create Tee-time
                    <FontAwesomeIcon
                      icon={faPlus}
                      style={{ color: "#ffffff" }}
                    />
                  </p>
                )}
                <p className="menuList">
                  View my orders
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    style={{ color: "#f7f7f7" }}
                  />
                </p>

                <p className="menuList" onClick={logout}>
                  Logout
                  <div className="fontposition">
                    <FontAwesomeIcon
                      icon={faRightFromBracket}
                      style={{ color: "#f7f7f7" }}
                    />
                  </div>
                </p>
              </motion.div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
