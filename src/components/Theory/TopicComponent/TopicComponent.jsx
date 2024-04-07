import { NavLink } from "react-router-dom";
import s from "./TopicComponent.module.css";

const TopicComponent = (props) => {
  let path = "topic" + props.id;

  return (
    <div className={s.topic}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default TopicComponent;
