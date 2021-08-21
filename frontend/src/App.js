import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CustomerList from "./components/customerList";
import AddCustomer from "./components/addCustomer";
import Navbar from "./components/navBar";
import Header from "./components/header";
import M_VehiTypeBtns from "./components/maintenance_vehicle_type";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Navbar />
        <M_VehiTypeBtns />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
