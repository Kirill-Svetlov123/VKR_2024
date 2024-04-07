import s from './TheoryComponent.module.css'
import TopicContentComponent from './TopicContent/TopicContentComponent';
import Topics from './Topics/Topics';

const TheoryComponent = (props) => {
  return( 
    <div className={s.theory}>
      <Topics topics={props.theoryState.theoryTopics} />
      <TopicContentComponent />
    </div>
  );
};

export default TheoryComponent;
