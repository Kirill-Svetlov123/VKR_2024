import s from "./EntryComponent.module.css";
import { NavLink, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AuthorisationComponent from "./AuthorisationComponent copy/AuthorisationComponent";
import RegistrationComponent from "./RegistrationComponent/RegistrationComponent";

const EntryComponent = (props) => {
  debugger;
  return (
    <div className={s.entry_component}>
      <div className={s.navigation}>
        <nav>
          <div></div>
          <NavLink to="/entry/authorisation">Авторизация</NavLink>
          <div>/</div>
          <NavLink to="/entry/registration">Регистрация</NavLink>
          <div></div>
        </nav>
      </div>
      <div className={s.entry_content}>
        <Routes>
          <Route
            path="authorisation"
            element={
              <AuthorisationComponent
                userEntry={props.entryState.userEntry}
                updateLoginText={props.updateLoginText}
                updatePasswordText={props.updatePasswordText}
                loginText={props.entryState.loginText}
                passwordText={props.entryState.passwordText}
                loginUser={props.loginUser}
              />
            }
          ></Route>
          <Route
            path="registration"
            element={
              <RegistrationComponent
                userEntry={props.entryState.userEntry}
                updateLoginText={props.updateLoginText}
                updatePasswordText={props.updatePasswordText}
                updatePassword2Text={props.updatePassword2Text}
                loginText={props.entryState.loginText}
                passwordText={props.entryState.passwordText}
                password2Text={props.entryState.password2Text}
                addUser={props.addUser}
              />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default EntryComponent;
