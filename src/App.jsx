import "./assets/index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Dashboard from "./pages/dashboard/Dasboard";
import Suppliers from "./pages/suppliers/Suppliers";
import Boxes from "./pages/boxes/Boxes";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Users from "./pages/users/Users";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="auth">
          <Route path="login" element={<Login />} />

          <Route path="register" element={<Register />} />
        </Route>

        <Route path="boxes" element={<Boxes />} />

        <Route path="suppliers" element={<Suppliers />} />

        <Route path="users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
