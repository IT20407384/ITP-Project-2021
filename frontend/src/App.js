import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CustomerList from "./components/customerList";
import AddCustomer from "./components/addCustomer";
import Navbar from "./components/navBar";
import Header from "./components/header";
import M_VehiTypeBtns from "./components/maintenance_vehicle_type";
import Tabs from "./components/tabs";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Navbar />
        <Route path="/home" component={M_VehiTypeBtns} />
        <Route path="/type/:id" exact component={Tabs} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
