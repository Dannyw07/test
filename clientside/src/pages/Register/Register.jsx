import React from "react";
import "../Register/register.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MuiTelInput } from "mui-tel-input";
import { useFormik } from "formik";
import * as yup from "yup";
import Navbar from "../../components/Navbar/Navbar";

const Register = () => {
  const [phone, setPhone] = React.useState("");

  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };
  return (
    <div className="reg">
      <Navbar />
      <div className="registerContainer">
        <div className="regTitle">
          <h1>Create an Acccount</h1>
        </div>
        <div className="regForm">
          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                m: 1,
                width: "97%",
                display: "grid",
                gridTemplateRows: "repeat(1, 1fr)",
                columnGap: "10px",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="filled-basic" label="Username" variant="filled" />
            <TextField
              id="email"
              label="Email"
              variant="filled"
              name="email"
              type="email"
            />
            <MuiTelInput
              onlyCountries={["MY"]}
              value={phone}
              onChange={handleChange}
            />
            <TextField
              id="password"
              label="Password"
              variant="filled"
              type="password"
            />
            {/* <TextField
              id="conFirmPassword"
              label="Confirm Password"
              variant="filled"
              type="password"
            /> */}
          </Box>
        </div>

        <div className="regButton">
          <button className="regB">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
