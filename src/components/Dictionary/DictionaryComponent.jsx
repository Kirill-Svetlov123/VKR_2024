import s from "./DictionaryComponent.module.css";
import Topics from "./../Theory/Topics/Topics";
import WordComponent from "./WordComponent/WordComponent";

const DictionaryComponent = (props) => {
  let wordsElements = props.dictionaryState.dictionaryWords.map((word) => (
    <WordComponent
      word={word.word}
      transcription={word.transcription}
      translation={word.translation}
    />
  ));

  return (
    <div className={s.dictionary}>
      <Topics topics={props.dictionaryState.dictionaryTopics} />
      <div className={s.words_list}>
        <div className={s.decor}>
          <div>Слово:</div>
          <div>Транскрипция:</div>
          <div>Перевод:</div>
        </div>
        {wordsElements}
      </div>
    </div>
  );
};

export default DictionaryComponent;
