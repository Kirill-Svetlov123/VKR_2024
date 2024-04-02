// import logo from './logo.svg';
import "./App.css";
import TheoryComponent from "./components/Theory/TheoryComponent";
import DictionaryComponent from "./components/Dictionary/DictionaryComponent";
import HeaderComponent from "./components/Header/HeaderComponent";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <HeaderComponent />
        <TheoryComponent />
      </div>
    </div>
  );
}

export default App;
