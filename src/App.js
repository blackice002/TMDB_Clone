import "./App.scss";
import Header from "./components/elements/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/container/Home";
import Details from "./components/container/Details";
import SearchResults from "./components/container/SearchResults";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path ={"/"} exact component={Home}/>
          <Route path ={"/details/:id"} exact component={Details}/>
          <Route path ={"/results/:searchTerm"} exact component={SearchResults}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
