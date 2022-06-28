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
import Contact from "./pages/Contact/Contact";
import FrenchQuiz from "./pages/FrenchQuiz/FrenchQuiz";
import FrenchHome from "./pages/FrenchHome/FrenchHome";
import GermanHome from "./pages/GermanHome/GermanHome";
import GermanQuiz from "./pages/Quizes/GermanQuiz";
import ItalianHome from "./pages/Italian/ItalianHome";
import ItalianQuiz from "./pages/Quizes/ItalianQuiz";
import ItalianAddWords from "./pages/Italian/ItalianAddWords";
import PortugueseHome from "./pages/Portuguese/PortugueseHome";
import SwedishHome from "./pages/Swedish/SwedishHome";

import 'animate.css';
import "./App.css";
import PortugueseQuiz from "./pages/Quizes/PortugueseQuiz";
import UpForReview from "./pages/Spanish/UpForReview";
import UpForReviewItalian from "./pages/Italian/UpForReviewItalian";


function App() {


  return (

    <>
      <Router>
        <ScrollToTop />
        <NavigationBar />
        <main className="py-5">
          <Container id="appContainer">

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/spanish" component={Spanish} />
              <Route exact path="/spanish/up-for-review" component={UpForReview} />

              
              <Route exact path="/quiz" component={Quiz} />
              
              <Route exact path="/french" component={FrenchHome} />
              <Route exact path="/french-quiz" component={FrenchQuiz} />
              
              <Route exact path="/german" component={GermanHome} />
              <Route exact path="/german-quiz" component={GermanQuiz} />

              <Route exact path="/italian" component={ItalianHome} />
              <Route exact path="/italian-quiz" component={ItalianQuiz} />
              <Route exact path="/italian-add-words" component={ItalianAddWords} />
              <Route exact path="/italian/up-for-review" component={UpForReviewItalian} />

              <Route exact path="/portuguese" component={PortugueseHome} />
              <Route exact path="/portuguese-quiz" component={PortugueseQuiz} />

              <Route exact path="/swedish" component={SwedishHome} />

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
