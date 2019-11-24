import React from "react";
import "./App.css";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Title />
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
