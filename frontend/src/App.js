import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CustomerList from './components/customerList';
import AddCustomer from './components/addCustomer';
import Navbar from './components/navBar';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <AddCustomer/><br></br>
        <CustomerList/>
      </div>
    </Router>
  );
}

export default App;