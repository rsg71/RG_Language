import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Components
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { Container } from "react-bootstrap";

// Pages
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import LandingPage from "./pages/Landing/Landing"

// Import css file for App
import "./App.css";


function App() {


    const [user, setUser] = useState(false);



    return (

        <>

            <Router>
                <NavigationBar />

                <main className="py-5">
                    <Container id="appContainer">

                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                            {user ? <Route exact path="/about" component={About} /> : <Redirect to="/" />}
                            {user ? <Route exact path="/contact" component={Contact} /> : <Redirect to="/" />}

                        </Switch>
                    </Container>

                </main>
                <Footer />

            </Router>
        </>

    );
}

export default App;
