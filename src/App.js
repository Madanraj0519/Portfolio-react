import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";




function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
