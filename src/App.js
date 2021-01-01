import "./App.scss";
import Header from "./components/elements/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "./components/elements/banner/Banner";
import Popular from "./components/elements/popular/Popular";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Banner/>
        <Popular/>
      </Router>
    </div>
  );
}

export default App;
