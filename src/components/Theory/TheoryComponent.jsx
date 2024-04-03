import s from './TheoryComponent.module.css'
import TopicContentComponent from './TopicContent/TopicContentComponent';

const TheoryComponent = () => {
  return( 
    <div className={s.theory}>
      <div className={s.list_of_topics}>
        <nav>
          <a href="#s">Тема 1</a>
          <a href="#s">Тема 2</a>
          <a href="#s">Тема 3</a>
          <a href="#s">Тема 4</a>
          <a href="#s">Тема 5</a>
          <a href="#s">Тема 6</a>
          <a href="#s">Тема 7</a>
          <a href="#s">Тема 8</a>
          <a href="#s">Тема 9</a>
          <a href="#s">Тема 10</a>
        </nav>
      </div>
      <TopicContentComponent />
    </div>
  );
};

export default TheoryComponent;
