import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const validateSchema = Yup.object().shape({
    // firstName: Yup.string().required("First Name cannot be empty").min(6),
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid!")
      .matches(/^(?!.*@[^,]*,)/),
    password: Yup.string().required("Password is required"),
  });

  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: userEmail,
      password: userPassword,
    }).then((response) => {
      console.log(response);
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   navigate("/MyAccount");
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };
  const handleData = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    navigate("/MyAccount");
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [showButton, setShowButton] = useState(true);

  const toggleButton = () => {
    setShowButton(!showButton);
  };

  const {
    Login,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validateSchema) });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
      </div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(handleData)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              // {...login("email")}
              {...Login("email")}
              error={errors.email ? true : false}
              helperText={errors.email?.message}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              // autoComplete="current-password"
              autoComplete="off"
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
              {...Login("password")}
              error={errors.password ? true : false}
              helperText={errors.password?.message}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={login}
            >
              Sign In
            </Button>

            {/* {showButton && <button onClick={toggleButton}>Hide Button</button>} */}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="http://localhost:3000/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
