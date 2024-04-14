// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EntryComponent from "./components/EntryComponent/EntryComponent";
import MainContent from "./components/MainContent/MainContent";

function App(props) {
  debugger
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-wrapper">
          <Routes>
            <Route
              path="/entry/*"
              element={
                <EntryComponent
                  entryState={props.state.entry}
                  updateLoginText={props.store.updateLoginText.bind(props.store)}
                  updatePasswordText={props.store.updatePasswordText.bind(props.store)}
                  updatePassword2Text={props.store.updatePassword2Text.bind(props.store)}
                  loginUser={props.store.loginUser.bind(props.store)}
                  addUser={props.store.addUser.bind(props.store)}
                />
              }
            ></Route>
            <Route path="/*" element={ <MainContent state={props.state} /> }></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
