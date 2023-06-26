import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Booking from "./pages/Booking/Booking";

import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact/Contact";
import AvailableTime from "./pages/AvailableTime/AvailableTime";
import MyAccount from "./pages/MyAccount/MyAccount";
import { AnimatePresence } from "framer-motion";

import CreateItem from "./pages/CreateItem/CreateItem";
import TeeTime from "./pages/Teetime/TeeTime";
import Slot2 from "./pages/Slot2/Slot2";
import { Review } from "./pages/Reviews/Review";
// import Gallery from "./pages/Gallery/Gallery";
// import News from "./pages/News/News";
import Blog from "./pages/Blog/Blog";
import Single from "./pages/Single/Single";
import Confirmation from "./pages/Confirmation/Confirmation";
import ReviewV2 from "./pages/ReviewV2/ReviewV2";
import FooterV2 from "./components/Footerv2/FooterV2";
import Write from "./pages/Write/Write";
import LoginV2 from "./pages/LoginV2/LoginV2";
import RegisterV2 from "./pages/RegisterV2/RegisterV2";
// import Navbarv2 from "./components/Navbarv2/Navbarv2";

function App() {
  // const navigate = useNavigate();

  // const navigateToContacts = () => {
  //   navigate("/contact");
  // };

  return (
    <AnimatePresence>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/booking" element={<Booking />} />
            {/* <Route path="/news" element={<News />} /> */}
            <Route path="/news" element={<Blog />} />
            <Route path="/blog1" element={<Single />} />
            <Route path="/register" element={<RegisterV2 />} />
            <Route path="/login" element={<LoginV2 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/availableTime" element={<AvailableTime />} />
            <Route path="/MyAccount" element={<MyAccount />} />
            <Route path="/availableTime/slot-1" element={<TeeTime />} />
            <Route path="/availableTime/slot-2" element={<Slot2 />} />
            <Route path="/createItem" element={<CreateItem />} />
            <Route path="/CustomerReview" element={<Review />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/confirm" element={<Confirmation />} />
            <Route path="/review" element={<ReviewV2 />} />
            <Route path="/footerv2" element={<FooterV2 />} />
            <Route path="/write" element={<Write />} />
            {/* <Route path="" */}
          </Routes>
        </BrowserRouter>
      </div>
    </AnimatePresence>
  );
}

export default App;
