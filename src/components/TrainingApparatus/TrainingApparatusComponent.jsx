import s from "./TrainingApparatusComponent.module.css";
import ButtonComponent from "./../Button/ButtonComponent";
import SelectComponent from "./../SelectComponent/SelectComponent";

const TrainingApparatusComponent = () => {
  return (
    <div className={s.trainig_apparatus}>
      <div className={s.explain_text}>
        Прежде чем начать, выберите настройки генерации
      </div>
      <div className={s.select_elements}>
        <div className={s.select_time}>
          <SelectComponent description="Выбрать время:" />
        </div>
        <div className={s.select_form}>
          <SelectComponent description="Выбрать форму:" />
        </div>
        <div className={s.select_topic}>
          <SelectComponent description="Выбрать тему:" />
        </div>
      </div>
      <footer className={s.generate_button}>
        <ButtonComponent />
      </footer>
    </div>
  );
};

export default TrainingApparatusComponent;
