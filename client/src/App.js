import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Nav/Nav";

import Home from "./pages/Home/Home"
import Spanish from "./pages/Spanish/Spanish"
import Quiz from "./pages/Quiz/Quiz"



function App() {
  return (

    <>
      <Router>

        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/spanish" component={Spanish} />
          <Route exact path="/quiz" component={Quiz} />
        </Switch>
      </Router>
    </>

  );
}

export default App;
