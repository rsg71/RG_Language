import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Nav/Nav";

import Home from "./pages/Home/Home"
import Spanish from "./pages/Spanish/Spanish"
import Quiz from "./pages/Quiz/Quiz"
import NoMatch from "./pages/NoMatch/NoMatch";
import Footer from "./components/Footer/Footer";
import SecretLanguage from "./pages/Secret/SecretLanguage/SecretLanguage";
import SecretLanguageAllWords from "./pages/Secret/SecretLanguageAllWords/SecretLanguageAllWords";
import SecretLanguageQuiz from "./pages/Secret/SecretLanguageQuiz/SecretLanguageQuiz";
import { Container } from "react-bootstrap";
import SecretTranslator from "./pages/Secret/SecretTranslator/SecretTranslator";
import ScrollToTop from "./utils/ScrollToTop";
import "./App.css";



function App() {


  return (

    <>
      <Router>
        <ScrollToTop />
        <NavBar />
        <main>
          <Container id="appContainer">

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/spanish" component={Spanish} />
              <Route exact path="/quiz" component={Quiz} />
              <Route exact path="/secret" component={SecretLanguage} />
              <Route exact path="/secret-quiz" component={SecretLanguageQuiz} />
              <Route exact path="/all-secret-language-words" component={SecretLanguageAllWords} />
              <Route exact path="/secret-translator" component={SecretTranslator} />

              {/* 404 page */}

              <Route path="*" render={() => <NoMatch />} />

            </Switch>
          </Container>

        </main>
        <Footer />
      </Router>
    </>

  );
}

export default App;
