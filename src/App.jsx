import "./assets/index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Dashboard from "./pages/dashboard/Dasboard";
import Suppliers from "./pages/suppliers/Suppliers";
import Boxes from "./pages/boxes/Boxes";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="boxes" element={<Boxes />} />

        <Route path="suppliers" element={<Suppliers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
