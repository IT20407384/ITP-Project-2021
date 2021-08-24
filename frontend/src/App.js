import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import VehicleSelect from "./components/MaintenanceManagement/selectVehicleType/maintenance_vehicle_type";
import TabSelect from "./components/MaintenanceManagement/TabSelector/tabs";

function App() {
  return (
    <Router>
      <switch>
        <Route path="/" component={Header} />
        <Route path="/" component={NavBar} />
        <Route path="/MManagement" component={VehicleSelect} />
        <Route path="/type/:id" component={TabSelect} />
        <Route path="/" component={Footer} />
      </switch>
    </Router>
  );
}

export default App;
