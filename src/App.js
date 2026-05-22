import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import CareerDetails from './pages/CareerDetails';
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';
import AICoach from "./pages/AICoach";
import Roadmap from './pages/Roadmap';
import CareerPreview from "./pages/CareerPreview";
import ScrollToTop from "./component/ScrollToTop";



function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/career/:id" element={<CareerDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ai-coach" element={<AICoach />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/career-preview" element={<CareerPreview />} />
      </Routes>
    </>
  );
}

export default App;
