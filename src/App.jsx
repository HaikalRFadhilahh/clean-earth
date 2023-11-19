import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Homepage/>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
