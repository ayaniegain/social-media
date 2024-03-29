import "./App.css";
import { Routes, Route } from "react-router-dom";

import Profile from "./components/Profile";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  );
}

export default App;
