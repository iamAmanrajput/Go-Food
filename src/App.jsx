import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./screens/Signup.jsx";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/createuser" element={<Signup />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
