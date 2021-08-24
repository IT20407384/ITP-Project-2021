<<<<<<< HEAD
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navBar";
import M_VehiTypeBtns from "./components/maintenance_vehicle_type";
import Tabs from "./components/tabs";
=======
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CustomerList from './components/customerList';
import AddCustomer from './components/addCustomer';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
>>>>>>> master

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div className="container">
        <Navbar />
        <Route path="/home" component={M_VehiTypeBtns} />
        <Route path="/type/:id" exact component={Tabs} />
      </div>
=======
      <switch>
        <Route path="/" component= {Header}/>
        <Route path="/" component={NavBar}/>
        <Route path="/add" component ={AddCustomer}/>
        <Route path="/all" component={CustomerList}/>
        <Route path="/" component={Footer}/>
      </switch>
>>>>>>> master
    </Router>
  );
}

export default App;
