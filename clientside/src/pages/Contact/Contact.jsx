import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Typography, Grid, Button, TextField } from "@mui/material";
import validate from "validate.js";
import emailjs from "emailjs-com";

const schema = {
  name: {
    presence: { allowEmpty: false, message: "is required" },
    length: { maximum: 128 },
  },
  email: {
    presence: { allowEmpty: false, message: "is requried" },
    email: true,
    length: { maximum: 300 },
  },
};

const Contact = () => {
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (e) => {
    e.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      },
      touched: {
        ...formState.touched,
        [e.target.name]: true,
      },
    }));
    // console.log(${process.env.SECRET_KEY})
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="container">
          <div>
            <form headers="application/json" name="contact-form">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4" align="center">
                    <strong>Contact Form</strong>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    placeholder="Name"
                    label="Name *"
                    variant="outlined"
                    size="medium"
                    name="name"
                    id="name"
                    // value={formState.values.name}
                    helperText={
                      hasError("name") ? formState.errors.name[0] : null
                    }
                    error={hasError("name")}
                    onChange={handleChange}
                    value={formState.values.name || ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    placeholder="E-mail"
                    label="E-mail *"
                    variant="outlined"
                    size="medium"
                    name="email"
                    id="email"
                    helperText={
                      hasError("email") ? formState.errors.email[0] : null
                    }
                    error={hasError("email")}
                    onChange={handleChange}
                    value={formState.values.email || ""}
                  />
                </Grid>
                <Button
                  size="large"
                  variant="contained"
                  type="submit"
                  color="primary"
                  disabled={!formState.isValid}
                >
                  Send
                </Button>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
