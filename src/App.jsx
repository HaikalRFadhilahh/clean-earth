import React from "react";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Homepage />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
