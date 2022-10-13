import FormInputs from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react";
import {
  createAuthUserWithEmailandPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField;

  const resetFormFields = () => {
    setFormField(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailandPassword(
        email,
        password
      );

      await createUserDocFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormField({ ...formField, [name]: value });
    console.log(formField);
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInputs
          label="Display Name"
          inputOption={{
            type: "text",
            required: true,
            name: "displayName",
            value: displayName,
            onChange: changeHandler,
          }}
        />

        <FormInputs
          label="Email"
          inputOption={{
            type: "email",
            required: true,
            name: "email",
            value: email,
            onChange: changeHandler,
          }}
        />

        <FormInputs
          label="Password"
          inputOption={{
            type: "password",
            required: true,
            name: "password",
            value: password,
            onChange: changeHandler,
          }}
        />

        <FormInputs
          label="Confirm Password"
          inputOption={{
            type: "password",
            required: true,
            name: "confirmPassword",
            value: confirmPassword,
            onChange: changeHandler,
          }}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
