// import logo from './logo.svg';
import "./App.css";
import TheoryComponent from "./components/Theory/TheoryComponent";
import DictionaryComponent from "./components/Dictionary/DictionaryComponent";
import HeaderComponent from "./components/Header/HeaderComponent";
import TrainingApparatusComponent from "./components/TrainingApparatus/TrainingApparatusComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-wrapper">
          <HeaderComponent />
          <div className="content">
            <Routes>
              <Route path="/theory" Component={TheoryComponent} />
              <Route path="/dictionary" Component={DictionaryComponent} />
              <Route
                path="/trainingApparatus"
                Component={TrainingApparatusComponent}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
