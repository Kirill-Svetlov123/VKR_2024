import s from './AuthorisationComponent.module.css'
import ButtonComponent from './../../Button/ButtonComponent';

const AuthorisationComponent = () => {
    return(
        <div className={s.authorisation}>
            <div>
                <div>Логин:</div>
                <input type="text" />
            </div>
            <div>
                <div>Пароль:</div>
                <input type="text" />
            </div>
            <div>
                <ButtonComponent text='Авторизоваться' />
            </div>
        </div>
    );
};

export default AuthorisationComponent;