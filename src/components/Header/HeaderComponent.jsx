import { NavLink } from "react-router-dom";
import s from "./HeaderComponent.module.css";

const HeaderComponent = () => {
  return (
    <header className={s.header}>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.non_active)}
          to="/theory"
        >
          Теория
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.non_active)}
          to="/dictionary"
        >
          Словарь
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.non_active)}
          to="/trainingApparatus"
        >
          Тренажер
        </NavLink>
      </nav>
    </header>
  );
};

export default HeaderComponent;
