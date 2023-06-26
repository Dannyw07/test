function validation(values) {
  let error = {};
  const email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // The Password must contain at least one Uppercase character.
  const password_pattern = /^(?=.*[A-Z]).*$/;

  //Validation for user registration

  //Name Validation
  if (values.name === "") {
    error.name = "Name should not be empty";
  } else {
    error.name = "";
  }

  //Email Validation
  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Please enter a valid Email address.";
  } else {
    error.email = "";
  }

  //Password Validation
  if (values.password === "") {
    error.password = "Password cannot be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password didn't match";
  } else {
    error.password = "";
  }
  return error;
}

export default validation;
