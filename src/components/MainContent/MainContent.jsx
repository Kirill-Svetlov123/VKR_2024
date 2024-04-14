import { Route, Routes } from "react-router-dom";
import DictionaryComponent from "../Dictionary/DictionaryComponent";
import HeaderComponent from "../Header/HeaderComponent";
import TheoryComponent from "../Theory/TheoryComponent";
import TrainingApparatusComponent from "../TrainingApparatus/TrainingApparatusComponent";
import s from "./MainContent.module.css";

const MainContent = (props) => {
  return (
    <div className={s.main_content_component}>
      <HeaderComponent />
      <div className="content">
        <Routes>
          <Route
            path="theory"
            element={<TheoryComponent theoryState={props.state.theory} />}
          />
          <Route
            path="dictionary"
            element={
              <DictionaryComponent dictionaryState={props.state.dictionary} />
            }
          />
          <Route
            path="trainingApparatus"
            element={<TrainingApparatusComponent />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default MainContent;
