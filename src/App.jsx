import "./assets/index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/dashboard/Dasboard";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Boxes from "./pages/administration/boxes/Boxes";
import Suppliers from "./pages/administration/suppliers/Suppliers";
import Users from "./pages/administration/users/Users";
import BoxMovements from "./pages/box-movements/box-movements/BoxMovements";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <main className="flex-grow-1 container py-4">
          <Routes>
            <Route path="*" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />

            <Route path="auth">
              <Route path="login" element={<Login />} />

              <Route path="register" element={<Register />} />
            </Route>

            <Route path="administration">
              <Route path="boxes" element={<Boxes />} />

              <Route path="suppliers" element={<Suppliers />} />

              <Route path="users" element={<Users />} />
            </Route>

            <Route path="box-movements">
              <Route path="box-movements" element={<BoxMovements />} />
            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
