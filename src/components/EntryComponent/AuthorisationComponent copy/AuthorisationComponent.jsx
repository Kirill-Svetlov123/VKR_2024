import s from "./AuthorisationComponent.module.css";
import ButtonComponent from "./../../Button/ButtonComponent";
import React from "react";
import { useNavigate } from "react-router-dom";

const AuthorisationComponent = (props) => {
  debugger
  let loginElement = React.createRef();
  let passwordElement = React.createRef();
  const navigate = useNavigate();

  if (props.userEntry)
      navigate('/');

  let loginUser = () => {
    props.loginUser();
  };

  let onLoginChange = () => {
    let login = loginElement.current.value;
    props.updateLoginText(login);
  };

  let onPasswordChange = () => {
    let password = passwordElement.current.value;
    props.updatePasswordText(password);
  };

  return (
    <div className={s.authorisation}>
      <div>
        <div>Логин:</div>
        <input
          ref={loginElement}
          type="text"
          value={props.loginText}
          onChange={onLoginChange}
        />
      </div>
      <div>
        <div>Пароль:</div>
        <input
          ref={passwordElement}
          type="text"
          value={props.passwordText}
          onChange={onPasswordChange}
        />
      </div>
      <div className={s.button_section}>
        <ButtonComponent onClickFunc={loginUser} text="Авторизоваться" />
      </div>
    </div>
  );
};

export default AuthorisationComponent;
