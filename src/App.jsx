// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthChecker from "./auth/AuthChecker";
import Homepage from "./pages/Homepage";
import Edukasipage from "./pages/Edukasipage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/edukasi"
          element={
            <AuthChecker>
              <Edukasipage />
            </AuthChecker>
          }
        />
        <Route path="/masuk" element={<Loginpage />} />
        <Route path="/daftar" element={<Registerpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
