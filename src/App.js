import './App.css';
import Layout from './components/Layout/Layout';
import {BrowserRouter , Routes,Route} from "react-router-dom";
import Home from "./pages/Home"
import About from './pages/About';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>

     </Routes>
     </BrowserRouter> 
    
    
    </div>
  );
}

export default App;
