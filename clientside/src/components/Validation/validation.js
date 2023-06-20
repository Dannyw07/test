const validateFullName = ({ fullName, setFullNameError }) => {
  return fullName && fullName.length < 5
    ? setFullNameError("Name is too short")
    : fullName && fullName.length > 50
    ? setFullNameError("Name is too long")
    : setFullNameError("");
};

const validateEmail = ({ email, setEmailError }) => {
  const emailRegular =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  return email && !email.match(emailRegular)
    ? setEmailError("Email is not valid")
    : setEmailError("");
};

const validateMessage = ({ message, setMessageError }) => {
  return message && message.length < 5
    ? setMessageError("Message is too short")
    : message && message.length > 200
    ? setMessageError("Message is too long")
    : setMessageError("");
};
//validate first name
const validateFirstName = ({ firstName, setFirstNameError }) => {
  return firstName && firstName.length < 5
    ? setFirstNameError("First Name is too short")
    : firstName && firstName.length > 50
    ? setFirstNameError("First Name is too long")
    : setFirstNameError("");
};
//validate last name
const validateLastName = ({ lastName, setLastNameError }) => {
  return lastName && lastName.length < 5
    ? setLastNameError("Last Name is too short")
    : lastName && lastName.length > 50
    ? setLastNameError("Last Name is too long")
    : setLastNameError("");
};

export {
  validateFullName,
  validateEmail,
  validateMessage,
  validateFirstName,
  validateLastName,
};
