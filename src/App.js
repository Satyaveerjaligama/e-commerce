import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductView from './Pages/ProductView';
import { routes } from './Utilities/Constants';

function App() {
  return (
    <Router basename='/'>
      <Routes>
        <Route Component={Home} path={routes.home}/>
        <Route Component={ProductView} path={routes.productView}/>
      </Routes>
    </Router>
  );
}

export default App;
