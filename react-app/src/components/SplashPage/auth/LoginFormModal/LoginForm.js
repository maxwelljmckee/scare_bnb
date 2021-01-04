import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../../../services/auth";

import FormInput from '../../../FormFields/FormInput'

import "./LoginForm.css"

const LoginForm = ({ authenticated, setAuthenticated, onClose }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(user);
      onClose()
    } else {
      setErrors(user.errors);
    }
  };

  const onDemo = async (e) => {
    e.preventDefault();
    const user = await login("demo@aa.io", "123");
    if (!user.errors) {
      setAuthenticated(user);
      onClose()
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form className="login-form">
      <div className="login-form__top">
        <div className="login-form__close" onClick={onClose}><i className="fas fa-times"></i></div>
        <h1>Log In</h1>
        <div style={{ width: "40px" }} />
      </div>
      {errors.length !== 0 && (
        <div className="login-form__errors">
          {errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
      )}

      <FormInput name="Email" required={true} type="text" value={email} onChange={updateEmail} />
      <FormInput name="Password" required={true} type="password" value={password} onChange={updatePassword} />
      <div className="login-form__button" onClick={onDemo}>Demo Log In</div>
      <div className="login-form__button" onClick={onLogin}>Log In</div>

    </form>
  );
};

export default LoginForm;
