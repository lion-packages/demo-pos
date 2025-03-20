import "./assets/index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Dashboard from "./pages/dashboard/Dasboard";
import Suppliers from "./pages/suppliers/Suppliers";
import Boxes from "./pages/boxes/Boxes";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Users from "./pages/users/Users";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <main class="flex-grow-1 container py-4">
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
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
