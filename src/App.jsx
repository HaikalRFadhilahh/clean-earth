// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./layout";
import {
  Nasabah,
  SetorSampah,
  Postingan,
  Pengaturan,
  Homepage,
  Edukasipage,
  Loginpage,
  Registerpage,
  Dashboard,
} from "./pages/";
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
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='nasabah' element={<Nasabah />} />
          <Route path='setorsampah' element={<SetorSampah />} />
          <Route path='postingan' element={<Postingan />} />
          <Route path='pengaturan' element={<Pengaturan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
