import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CustomerList from './components/customerList';
import AddCustomer from './components/addCustomer';
import Navbar from './components/navBar';
import EmpList from './components/Employee_Details';
import HRView from './components/HR_Management_View';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <HRView/>
        
        
      </div>
    </Router>
  );
}

export default App;