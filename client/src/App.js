import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Index from './components/Index/Index';
import Stocks from './components/Stocks/Stocks';
import Home from './components/Home/Home';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Router> 
    <Navbar/>
    
            <Routes>
           
              
                <Route path="/" element = {<Homepage/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/home/:id" element={<Stocks/>}></Route>
                
                {/* <Route path="/about" element={<About/>}></Route> */}
                {/* <Route path="/index" element={<Index/>}></Route> */}
                {/* <Route path="/stocks" element={<Stocks/>}></Route> */}
              
            </Routes>
        </Router>
    </div>
  );
}

export default App;
