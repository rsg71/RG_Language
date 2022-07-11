import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";

import Home from "./pages/Home/Home"
import Spanish from "./pages/Spanish/Spanish"
import SpanishQuiz from "./pages/SpanishQuiz/SpanishQuiz"
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
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import UserHome from "./pages/UserHome/UserHome";
import UserProfile from "./pages/UserProfile/UserProfile";
import AddLanguage from "./pages/AddLanguage/AddLanguage";
import GenericHomepage from "./pages/GenericHomepage/GenericHomepage";
import GenericQuiz from "./pages/Quizes/GenericQuiz";
import GenericReview from "./pages/GenericReview/GenericReview";
import API from "./utils/API";
import LoadingCard from "./components/LoadingCard/LoadingCard";
import Error from "./components/Error/Error";


export const CurrentUserContext = React.createContext({});


function App() {


  let env = process.env.NODE_ENV;

  let isDevelopmentEnv = env === 'development';



  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);



  const handleSetUser = (user) => {
    setCurrentUser(user);
  }

  // const handleLogin = (loginData) => {
  //   setLoading(true)

  //   API.login(formData)
  //   .then(res => {
  //       console.log("user: ", res);
  //       let userData = res.data;
  //       handleSetUser(userData);

  //       navigate("/user-home")
  //   })
  //   .catch(err => {
  //       console.log(err);
  //       setIsError(true);
  //   })
  // }




  useEffect(() => {
    console.log("testing login")
    setLoading(true);
    API.pageLoadCheckLoggedIn()
      .then(res => {
        console.log("test login res: ", res)
        setCurrentUser(res.data);
        setLoading(false);
        setLoaded(true);
        setError(false);

      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        setLoaded(false);
        setError(true);

      })
  }, [])

  return (

    <>
      <Router>
        <ScrollToTop />

        <CurrentUserContext.Provider value={currentUser}>


          {isDevelopmentEnv &&
            <>
              <pre>currentUser: {JSON.stringify(currentUser, null, 4)}</pre>
              <pre>loading: {JSON.stringify(loading, null, 4)}</pre>
              <pre>loaded: {JSON.stringify(loaded, null, 4)}</pre>
            </>
          }



          <NavigationBar setCurrentUser={setCurrentUser} />
          <main className="py-5">
            <Container id="appContainer">

              <Routes>


                <Route path="/" element={<Home />} />
                <Route path="/spanish" element={<Spanish />} />
                <Route path="/spanish/up-for-review" element={<UpForReview />} />


                <Route path="/spanish-quiz" element={<SpanishQuiz />} />

                <Route path="/french" element={<FrenchHome />} />
                <Route path="/french-quiz" element={<FrenchQuiz />} />

                <Route path="/german" element={<GermanHome />} />
                <Route path="/german-quiz" element={<GermanQuiz />} />

                <Route path="/italian" element={<ItalianHome />} />
                <Route path="/italian-quiz" element={<ItalianQuiz />} />
                <Route path="/italian-add-words" element={<ItalianAddWords />} />
                <Route path="/italian/up-for-review" element={<UpForReviewItalian />} />

                <Route path="/portuguese" element={<PortugueseHome />} />
                <Route path="/portuguese-quiz" element={<PortugueseQuiz />} />

                <Route path="/swedish" element={<SwedishHome />} />

                <Route path="/secret" element={<SecretLanguage />} />
                <Route path="/secret-quiz" element={<SecretLanguageQuiz />} />
                <Route path="/all-secret-language-words" element={<SecretLanguageAllWords />} />
                <Route path="/secret-translator" element={<SecretTranslator />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />


                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login handleSetUser={handleSetUser} setLoading={setLoading} setLoaded={setLoaded} setError={setError} />} />


                {loaded && !error && !loading &&
                  <>
                    {/* {currentUser !== null && */}
                    {/* <> */}
                    <Route path="/user-home" element={<UserHome />} />
                    <Route path="/user-profile" element={<UserProfile setCurrentUser={setCurrentUser} />} />
                    {/* </> */}
                    {/* } */}

                    <Route path="/add-language" element={<AddLanguage />} />
                    <Route path="/generic/:languageName" element={<GenericHomepage />} />
                    <Route path="/quiz/generic/:languageName" element={<GenericQuiz />} />
                    <Route path="/review/generic/:languageName" element={<GenericReview />} />

                  </>
                }



                {/* 404 page */}

                <Route path="*" render={() => <NoMatch />} />

              </Routes>

              {/* {error && <Error />} */}
              {loading && <LoadingCard />}

            </Container>

          </main>

        </CurrentUserContext.Provider>
        <Footer />
      </Router>
    </>

  );
}

export default App;
