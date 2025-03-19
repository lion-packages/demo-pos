import "./assets/index.css";

import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Container>
                <h1>Hola</h1>
              </Container>
            </Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
