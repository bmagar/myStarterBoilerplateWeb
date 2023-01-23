import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  );
};

export default App;

// Style Component
// -> theme.provider
// -> Create a const theme
