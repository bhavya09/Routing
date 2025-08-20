import "./styles.css";
import Body from "./Body";
import About from "./About";
import Team from "./Team";
import Login from "./Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/about">About</Link>&nbsp;
          <Link to="/team">Team</Link>&nbsp;
          <Link to="/login">Login</Link>
        </header>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
