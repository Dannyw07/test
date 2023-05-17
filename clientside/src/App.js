import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Booking from "./pages/Booking/Booking";
import News from "./pages/News/News";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact/Contact";
import AvailableTime from "./pages/AvailableTime/AvailableTime";
import MyAccount from "./pages/MyAccount/MyAccount";
import { AnimatePresence } from "framer-motion";
import Blog from "./pages/News/Blog";
import CreateItem from "./pages/CreateItem/CreateItem";

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
            <Route path="/news" element={<Blog />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/availableTime" element={<AvailableTime />} />
            <Route path="/MyAccount" element={<MyAccount />} />
            <Route path="/createItem" element={<CreateItem />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AnimatePresence>
  );
}

export default App;
