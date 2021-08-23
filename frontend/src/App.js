import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CustomerList from './components/customerList';
import AddCustomer from './components/addCustomer';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <switch>
        <Route path="/" component= {Header}/>
        <Route path="/" component={NavBar}/>
        <Route path="/add" component ={AddCustomer}/>
        <Route path="/all" component={CustomerList}/>
        <Route path="/" component={Footer}/>
      </switch>
    </Router>
  );
}

export default App;