import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../Button/ButtonComponent";
import s from "./RegistrationComponent.module.css";
import React from "react";

const RegistrationComponent = (props) => {
  let loginElement = React.createRef();
  let passwordElement = React.createRef();
  let password2Element = React.createRef();
  const navigate = useNavigate();

  if (props.userEntry)
      navigate('/');

  let addUser = () => {
    props.addUser();
  };

  let onLoginChange = () => {
    let login = loginElement.current.value;
    props.updateLoginText(login);
  };

  let onPasswordChange = () => {
    let password = passwordElement.current.value;
    props.updatePasswordText(password);
  };

  let onPassword2Change = () => {
    let password2 = password2Element.current.value;
    props.updatePassword2Text(password2);
  };

  return (
    <div className={s.registration}>
      <div>
        <div>Логин:</div>
        <input
          ref={loginElement}
          type="text"
          onChange={onLoginChange}
          value={props.loginText}
        />
      </div>
      <div>
        <div>Пароль:</div>
        <input
          ref={passwordElement}
          type="text"
          onChange={onPasswordChange}
          value={props.passwordText}
        />
      </div>
      <div>
        <div>Повторите пароль:</div>
        <input
          ref={password2Element}
          type="text"
          onChange={onPassword2Change}
          value={props.password2Text}
        />
      </div>
      <div className={s.button_section}>
        <ButtonComponent onClickFunc={addUser} text="Зарегистрироваться" />
      </div>
    </div>
  );
};

export default RegistrationComponent;
