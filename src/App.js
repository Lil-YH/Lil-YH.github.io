import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import navbar from './components/navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <Router>
      <navbar />
      <Routes>
        <Route path="/" elements={About}/>
        <Route path="/" elements={Projects}/>
        <Route path="/" elements={Skills}/>
        <Route path="/" elements={Contact}/>
      </Routes>
    </Router>
  );
}

export default App;
