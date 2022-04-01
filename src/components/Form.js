import React, { useState, useRef } from "react";
import "../styles/Form.css";
import Axios from "axios";

const Form = () => {
  const initialState = {
    givenName: "",
    surname: "",
    email: "",
    reEmail: "",
    passport: "",
    password: "",
    rePassword: "",
  };

  const givenNameRef = useRef(0);
  const surnameRef = useRef(0);
  const emailRef = useRef(0);
  const reEmailRef = useRef(0);
  const passportRef = useRef(0);
  const passwordRef = useRef(0);
  const rePasswordRef = useRef(0);

  const input_regex = {
    givenName: /^[a-zA-Z]+[a-zA-Z0-9]*$/,
    surname: /^[a-zA-Z]+[a-zA-Z0-9]*$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    reEmail: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    passport: /^[a-zA-Z0-9]{7,9}/,
    password:
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
    rePassword:
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
  };

  const [userData, setUserData] = useState(initialState);

  const onChange = (e) => {
    const value = e.target.value;
    setUserData({
      ...userData,
      [e.target.name]: value,
    });
  };

  const validate = (field, regex, ref) => {
    const value = field.target.value;
    const valid = regex.test(value);
    if (valid) {
      ref.current.className = "";
      ref.current.value = true;
    } else {
      ref.current.className = "error";
      ref.current.value = false;
      console.log(ref.current.value);
    }
  };

  function onSubmitHandler(e) {
    // e.preventDefault();
    if (
      givenNameRef.current.value ||
      surnameRef.current.value ||
      reEmailRef.current.value ||
      rePasswordRef.current.value ||
      passportRef.current.value
    ) {
      Axios.post("http://localhost:8000/user-register", userData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please Enter Valid Credentials!");
    }
    console.log(userData);
  }

  return (
    <div className="user-form">
      <h1>User Information</h1>
      <div className="field-container">
        <input
          type="text"
          placeholder="Given Name"
          name="givenName"
          ref={givenNameRef}
          onChange={(e) => {
            onChange(e);
            validate(e, input_regex.givenName, givenNameRef);
          }}
          value={userData.givenName}
        />
      </div>

      <p
        id="name"
        className={
          givenNameRef.current.value === false ? "error" : "error-none"
        }
      >
        First Letter, rest can be numeric + special characters (15 max)!
        {/* {givenNameRef.current.value === false
          ? "First Letter, rest can be numeric + special characters (15 max)!"
          : ""} */}
      </p>

      <div className="field-container">
        <input
          type="text"
          placeholder="Surname"
          name="surname"
          ref={surnameRef}
          onChange={(e) => {
            onChange(e);
            validate(e, input_regex.surname, surnameRef);
          }}
          value={userData.surname}
        />
      </div>

      <p
        id="surname"
        className={surnameRef.current.value === false ? "error" : "error-none"}
      >
        "First Letter, rest can be numeric + special characters (15 max)!"
        {/* {surnameRef.current.value === false
          ? "First Letter, rest can be numeric + special characters (15 max)!"
          : ""} */}
      </p>

      <div className="field-container">
        <input
          type="text"
          placeholder="Email"
          name="email"
          ref={emailRef}
          onChange={(e) => {
            onChange(e);
            validate(e, input_regex.email, emailRef);
          }}
          value={userData.email}
        />
      </div>
      <p
        id="email"
        className={emailRef.current.value === false ? "error" : "error-none"}
      >
        "Invalid Email"
        {/* {emailRef.current.value === false ? "Invalid Email" : ""} */}
      </p>

      <div className="field-container">
        <input
          type="text"
          placeholder="Retype Your Email"
          name="reEmail"
          ref={reEmailRef}
          onChange={(e) => {
            onChange(e);
            validate(e, input_regex.reEmail, reEmailRef);
          }}
          value={userData.reEmail}
        />
      </div>
      <p
        id="reemail"
        className={userData.email !== userData.reEmail ? "error" : "error-none"}
      >
        "invalid email or do not match"
        {/* {(userData.email !== userData.reEmail) === false
          ? "invalid email or do not match"
          : ""} */}
      </p>
      <div className="field-container">
        <input
          type="text"
          placeholder="Passport Number"
          name="passport"
          ref={passportRef}
          onChange={(e) => {
            onChange(e);
            validate(e, input_regex.passport, passportRef);
          }}
          value={userData.passport}
        />
      </div>
      <p
        id="passport"
        className={passportRef.current.value === false ? "error" : "error-none"}
      >
        "Passport can be alphanumeric (9 characters) but no special characters!"
        {/* {passportRef.current.value === false
          ? "Passport can be alphanumeric (9 characters) but no special characters!"
          : ""} */}
      </p>

      <div className="field-container">
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={passwordRef}
          onChange={(e) => {
            onChange(e);
            validate(e, input_regex.password, passwordRef);
          }}
          value={userData.password}
        />
      </div>

      <p
        id="password"
        className={passwordRef.current.value === false ? "error" : "error-none"}
      >
        "Must have one uppercase, lowercase, special, number! (min 8)"
        {/* {passwordRef.current.value === false
          ? "Must have one uppercase, lowercase, special, number! (min 8)"
          : ""} */}
      </p>

      <div className="field-container">
        <input
          type="password"
          placeholder="Retype Your Password"
          name="rePassword"
          ref={rePasswordRef}
          onChange={(e) => {
            onChange(e);
            validate(e, input_regex.rePassword, rePasswordRef);
          }}
          value={userData.rePassword}
        />
      </div>

      <p
        id="repassword"
        className={
          userData.password !== userData.rePassword ? "error" : "error-none"
        }
      >
        "invalid password or do not match"
        {/* {(userData.password !== userData.rePassword) === false
          ? "invalid password or do not match"
          : ""} */}
      </p>

      <div className="field-container">
        <input id="submit" type="submit" onClick={(e) => onSubmitHandler(e)} />
      </div>
    </div>
  );
};

export default Form;
