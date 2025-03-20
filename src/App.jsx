import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Dashboard from "./pages/dashboard/Dasboard";
import Suppliers from "./pages/suppliers/Suppliers";

import "./assets/index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="suppliers" element={<Suppliers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
