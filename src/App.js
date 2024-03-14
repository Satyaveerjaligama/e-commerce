import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductView from './Pages/ProductView';

function App() {
  return (
    <Router basename='/'>
      <Routes>
        <Route Component={Home} path="home"/>
        <Route Component={ProductView} path="product"/>
      </Routes>
    </Router>
  );
}

export default App;
