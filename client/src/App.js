import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Nav/Nav";

import Home from "./pages/Home/Home"
import Spanish from "./pages/Spanish/Spanish"
import Quiz from "./pages/Quiz/Quiz"
import NoMatch from "./pages/NoMatch/NoMatch";
import Footer from "./components/Footer/Footer";



function App() {
  return (

    <>
      <Router>

        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/spanish" component={Spanish} />
            <Route exact path="/quiz" component={Quiz} />
            {/* 404 page */}
            <Route>
              <NoMatch />
            </Route>
          </Switch>
          </main>
        <Footer />
      </Router>
    </>

  );
}

export default App;
