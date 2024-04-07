import s from './WordComponent.module.css'

const WordComponent = (props) => {
    return(
        <div className={s.dictionary_word}>
            <div className={s.word}>
                {props.word}
            </div>
            <div className={s.transcription}>
                {props.transcription}
            </div>
            <div className={s.translation}>
                {props.translation}
            </div>
        </div>
    );
};

export default WordComponent;