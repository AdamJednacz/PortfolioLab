import './scss/App.scss';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"

import Login from "./components/Login";
import Register from "./components/Register"
function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
