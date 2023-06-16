import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import { Link,BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">  
       <Router>
      <Navbar />
      <Routes>
        <Route exact path="./Pages/Home" element={<Home/>} />
        {/* <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/admin" element={<Admin/>} /> */}
      </Routes>
      
    </Router>
    </div>
  );
}

export default App;
