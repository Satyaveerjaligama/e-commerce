import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductView from './Pages/ProductView';
import { routes } from './Utilities/Constants';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <Router basename='/'>
      <Routes>
        <Route Component={Home} path="/"/>
        <Route Component={Home} path={routes.home}/>
        <Route Component={ProductView} path={routes.productView}/>
        <Route Component={PageNotFound} path="*" />
      </Routes>
    </Router>
  );
}

export default App;
