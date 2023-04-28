import React from "react";
import "../Register/register.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MuiTelInput } from "mui-tel-input";
import { useFormik } from "formik";
import * as yup from "yup";
import Navbar from "../../components/Navbar/Navbar";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
const Register = () => {
  // const [phone, setPhone] = React.useState("");

  // const handleChange = (newPhone) => {
  //   setPhone(newPhone);
  // };
  return (
    // <div className="reg">
    //   <Navbar />
    //   <div className="registerContainer">
    //     <div className="regTitle">
    //       <h1>Create an Acccount</h1>
    //     </div>
    //     <div className="regForm">
    //       <Box
    //         component="form"
    //         sx={{
    //           "& > :not(style)": {
    //             m: 1,
    //             width: "97%",
    //             display: "grid",
    //             gridTemplateRows: "repeat(1, 1fr)",
    //             columnGap: "10px",
    //           },
    //         }}
    //         noValidate
    //         autoComplete="off"
    //       >
    //         <TextField id="filled-basic" label="Username" variant="filled" />
    //         <TextField
    //           id="email"
    //           label="Email"
    //           variant="filled"
    //           name="email"
    //           type="email"
    //         />
    //         <MuiTelInput
    //           onlyCountries={["MY"]}
    //           value={phone}
    //           onChange={handleChange}
    //         />
    //         <TextField
    //           id="password"
    //           label="Password"
    //           variant="filled"
    //           type="password"
    //         />
    //         {/* <TextField
    //           id="conFirmPassword"
    //           label="Confirm Password"
    //           variant="filled"
    //           type="password"
    //         /> */}
    //       </Box>
    //     </div>

    //     <div className="regButton">
    //       <button className="regB">Continue</button>
    //     </div>
    //   </div>
    // </div>

    <MDBContainer fluid>
      <Navbar />
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Your Name"
                  id="form1"
                  type="text"
                  className="w-100"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput label="Your Email" id="form2" type="email" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput label="Password" id="form3" type="password" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  label="Repeat your password"
                  id="form4"
                  type="password"
                />
              </div>

              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <MDBBtn className="mb-4" size="lg">
                Register
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Register;
