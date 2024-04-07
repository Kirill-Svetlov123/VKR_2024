import TopicComponent from "../TopicComponent/TopicComponent";
import s from "./Topics.module.css";

const Topics = (props) => {
  let topicsElements = props.topics.map((topic) => (
    <TopicComponent name={topic.name} id={topic.id} />
  ));

  return (
    <div className={s.list_of_topics}>
      <nav>{topicsElements}</nav>
    </div>
  );
};

export default Topics;
