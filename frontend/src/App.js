import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navBar";
import M_VehiTypeBtns from "./components/maintenance_vehicle_type";
import Tabs from "./components/tabs";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/home" component={M_VehiTypeBtns} />
        <Route path="/type/:id" exact component={Tabs} />
      </div>
    </Router>
  );
}

export default App;
