import './App.css';
import  { BrowserRouter as Router, Routes, Route }  from "react-router-dom";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body"


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Body/>}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
