import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";

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
import About from "./pages/About/About";
import "./App.css";
import Contact from "./pages/Contact/Contact";



function App() {


  return (

    <>
      <Router>
        <ScrollToTop />
        <NavigationBar />
        <main className="py-4">
          <Container id="appContainer">

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/spanish" component={Spanish} />
              <Route exact path="/quiz" component={Quiz} />
              <Route exact path="/secret" component={SecretLanguage} />
              <Route exact path="/secret-quiz" component={SecretLanguageQuiz} />
              <Route exact path="/all-secret-language-words" component={SecretLanguageAllWords} />
              <Route exact path="/secret-translator" component={SecretTranslator} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />

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
