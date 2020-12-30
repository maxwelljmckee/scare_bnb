import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../../services/auth';

import FormInput from '../../../FormFields/FormInput'
import FormInputField from '../../../FormFields/FormInputField'
import ImageInput from '../../../FormFields/ImageCropper/ImageInput'

import "./SignUpForm.css"

const SignUpForm = ({ authenticated, setAuthenticated, onClose }) => {
  const [errors, setErrors] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      let newUser = {firstName, lastName, bio, email, password, profilePic}
      const user = await signUp(newUser);
      if (!user.errors) {
        setAuthenticated(user);
        onClose()
      }
    }
  };

  const onHost = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(firstName, lastName, bio, email, password, profilePic);
      if (!user.errors) {
        setAuthenticated(true);
        // REDIRECT TO HOSTING FORM
      }
    }
  }

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateBio = (e) => {
    setBio(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form className="signup-form" onSubmit={onSignUp}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div className="signup-form__top">
        <div className="signup-form__close" onClick={onClose}><i className="fas fa-times"></i></div>
        <h1>Sign up</h1>
        <div style={{ width: "40px" }} />
      </div>
      <div className="signup-form__left">
        <FormInput name="First Name" required={true} type="text" value={firstName} onChange={updateFirstName} />
        <FormInput name="Last Name" required={true} type="text" value={lastName} onChange={updateLastName} />
        <FormInput name="Email" required={true} type="text" value={email} onChange={updateEmail} />
        <FormInput name="Password" required={true} type="text" value={password} onChange={updatePassword} />
        <FormInput name="Confirm Password" required={true} type="text" value={repeatPassword} onChange={updateRepeatPassword} />
      </div>
      <div className="signup-form__right">
        <h2>Profile Picture</h2>
        <ImageInput aspect={1} onChange={setProfilePic} />
      </div>
      <div className="signup-form__bottom">
        <FormInputField name="Bio" required={true} type="text" value={bio} onChange={updateBio} />
        <div className="signup-form__bottom-buttons">
          <div className="signup-form__button" onClick={onHost}>Become a Host</div>
          <div className="signup-form__button" onClick={onSignUp}>Sign Up</div>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
