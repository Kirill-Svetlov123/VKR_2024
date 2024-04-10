import ButtonComponent from '../../Button/ButtonComponent';
import s from './RegistrationComponent.module.css'

const RegistrationComponent = () => {
    return(
        <div className={s.registration}>
            <div>
                <div>Логин:</div>
                <input type="text" />
            </div>
            <div>
                <div>Пароль:</div>
                <input type="text" />
            </div>
            <div>
                <div>Повторите пароль:</div>
                <input type="text" />
            </div>
            <div>
                <ButtonComponent text='Зарегистрироваться' />
            </div>
        </div>
    );
};

export default RegistrationComponent;