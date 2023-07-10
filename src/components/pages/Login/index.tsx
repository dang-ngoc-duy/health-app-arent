import React, { useEffect, useState } from "react";
import { StyledLogin } from "./style";
import { useUserLogin } from "src/hooks/useUserLogin";
import { useNavigate } from "react-router-dom";

interface ErrorMessages {
  name: string;
  message: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useUserLogin();
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({
    name: "",
    message: "",
  });

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password",
    login: "Login not successful due to invalid credentials",
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const { uname, pass } = event.target.elements;

    if (uname.value.trim() === "") {
      setErrorMessages({ name: "uname", message: errors.uname });
      return;
    }

    if (pass.value.trim() === "") {
      setErrorMessages({ name: "pass", message: errors.pass });
      return;
    }

    login(uname.value, pass.value);

    if (!localStorage.getItem("USER_PROFILE")) {
      setErrorMessages({ name: "login", message: errors.login });
    }
  };

  const renderErrorMessage = (name: string) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div style={{ paddingInline: "0.5rem" }}>
          {renderErrorMessage("login")}
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          <a style={{ textDecoration: "none" }} href="/recommended">
            Continue without login!!!
          </a>
        </div>
      </form>
    </div>
  );

  useEffect(() => {
    if (localStorage.getItem("USER_PROFILE")) {
      navigate("/");
    }
  });

  return (
    <StyledLogin className="login-container">
      <div className="login-form">
        <div className="title">
          <img src="assets/icons/app_logo.svg" alt="logo" />
        </div>
        {renderForm}
      </div>
    </StyledLogin>
  );
};

export default Login;
