import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Showcase from "./pages/Showcase";

const App = () => {
  return (
    <NavBar>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/showcase" element={ <Showcase /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </NavBar>
  );
}

export default App;
