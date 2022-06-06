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
      <Routes location={ location } key={ location.pathname }>
        <Route path="/" element={ <NavBar /> }>
          <Route index element={ <Home /> } />
          <Route path="/showcase" element={ <Showcase useAsPage={ true } /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
