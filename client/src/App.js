import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Nav/Nav";

import Home from "./pages/Home/Home"
import Spanish from "./pages/Spanish/Spanish"
import Quiz from "./pages/Quiz/Quiz"
import NoMatch from "./pages/NoMatch/NoMatch";
import Footer from "./components/Footer/Footer";
import SecretLanguage from "./pages/SecretLanguage/SecretLanguage";
import SecretLanguageAllWords from "./pages/SecretLanguageAllWords/SecretLanguageAllWords";
import SecretLanguageQuiz from "./pages/SecretLanguageQuiz/SecretLanguageQuiz";



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
            <Route exact path="/secret" component={SecretLanguage} />
            <Route exact path="/secret-quiz" component={SecretLanguageQuiz} />
            <Route exact path="/all-secret-language-words" component={SecretLanguageAllWords} />
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
