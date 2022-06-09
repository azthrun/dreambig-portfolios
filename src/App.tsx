import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={ location } key={ location.pathname }>
        <Route>
          <Route index element={ <Home /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
