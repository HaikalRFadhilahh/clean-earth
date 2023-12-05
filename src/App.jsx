// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardAdminLayout } from "./layout";
import { DashboardUserLayout } from "./layout";

import {
  Nasabah,
  SetorSampah,
  Postingan,
  PengaturanAdmin,
  Homepage,
  Edukasipage,
  Loginpage,
  Registerpage,
  DashboardAdmin,
  DashboardUser,
  AkunSaya,
  Transaksi,
  PengaturanBiodataUser,
  PengaturanKatasandiUser,
  PengaturanBiodataAdmin,
  PengaturanKatasandiAdmin,
  TambahNasabah,
  BacaArtikel,
  EditNasabah,
} from "./pages/";
import TestJWT from "./pages/TestJWT";
import Komunitaspage from "./pages/Komunitaspage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/edukasi" element={<Edukasipage />} />
        <Route path="/baca" element={<BacaArtikel />} />
        <Route path="/masuk" element={<Loginpage />} />
        <Route path="/daftar" element={<Registerpage />} />
        <Route path="/test" element={<TestJWT />} />

        <Route path="/dashboard" element={<DashboardAdminLayout />}>
          <Route index element={<DashboardAdmin/>} />
          <Route path="nasabah" element={<Nasabah />} />
          <Route path="setorsampah" element={<SetorSampah />} />
          <Route path="postingan" element={<Postingan />} />
          <Route path="pengaturan" element={<PengaturanAdmin />} />
          <Route path="biodata" element={<PengaturanBiodataAdmin />} />
          <Route path="katasandi" element={<PengaturanKatasandiAdmin />} />
          <Route path="tambahnasabah" element={<TambahNasabah />} />
          <Route path="editnasabah" element={<EditNasabah />} />
        </Route>

        <Route path="/profile" element={<DashboardUserLayout />}>
          <Route index element={<DashboardUser />} />
          <Route path="transaksi" element={<Transaksi />} />
          <Route path="akunsaya" element={<AkunSaya />} />
          <Route path="pengaturankatasandi" element={<PengaturanKatasandiUser />} />
          <Route path="pengaturanbiodata" element={<PengaturanBiodataUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
