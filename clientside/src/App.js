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

function App() {
  // const navigate = useNavigate();

  // const navigateToContacts = () => {
  //   navigate("/contact");
  // };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/news" element={<News />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/availableTime" element={<AvailableTime />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
