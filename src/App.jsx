import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './Pages/Product';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/product' element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
