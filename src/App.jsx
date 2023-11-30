// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Edukasipage from "./pages/Edukasipage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import TestJWT from "./pages/TestJWT";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/edukasi' element={<Edukasipage />} />
        <Route path='/masuk' element={<Loginpage />} />
        <Route path='/daftar' element={<Registerpage />} />
        <Route path='/test' element={<TestJWT />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
