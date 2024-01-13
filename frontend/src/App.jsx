import { useEffect } from "react";
import "./styles/bootstrap.scss";
import "./styles/style.scss";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import "../node_modules/font-awesome/css/font-awesome.min.css";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<Signup />} path="/signup"></Route>
        <Route element={<Login />} path="/login"></Route>
      </Routes>
    </div>
  );
}

export default App;
