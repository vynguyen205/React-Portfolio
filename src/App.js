import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="h-screen w-screen bg-[#0C1117]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
