import s from './EntryComponent.module.css'
import { NavLink, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AuthorisationComponent from './AuthorisationComponent copy/AuthorisationComponent';
import RegistrationComponent from './RegistrationComponent/RegistrationComponent';

const EntryComponent = () => {
    return(
        <div className={s.entry_component} >
            <div className={s.navigation} >
                <nav>
                    <NavLink to="/authorisation">Авторизация</NavLink>
                    <NavLink to="/registration">Регистрация</NavLink>
                </nav>
            </div>
            <div className={s.entry_content} >
                <Routes>
                    <Route path='/authorisation' Component={ AuthorisationComponent }></Route>
                    <Route path='/registration' Component={ RegistrationComponent }></Route>
                </Routes>
            </div>
        </div>
    );
};

export default EntryComponent;