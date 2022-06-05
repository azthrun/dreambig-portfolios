import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Showcase from "./pages/Showcase";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <NavBar>
        <Routes location={ location } key={ location.key }>
          <Route path="/" element={ <Home /> } />
          <Route path="/showcase" element={ <Showcase /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </NavBar>
    </AnimatePresence>
  );
}

export default App;
