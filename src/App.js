import React from "react";
import "./App.css";
import {Switch, Route} from "react-router-dom";

import CoLocation from "./pages/Colocation/Colocation";
import ContactUs from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/SignUp/SignUp";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/colocation" exact component={CoLocation} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
