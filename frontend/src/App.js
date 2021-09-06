import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import VehicleSelect from './components/Mechanical/selectVehicleType/maintenance_vehicle_type'
import TabSelect from './components/Mechanical/TabSelector/tabs'
import EditPlan from './components/Mechanical/editCurrentPlans/editMaintenancePlans'

function App() {
  return (
    <Router>
      <switch>
        <Route path="/" component={Header} />
        <Route path="/" component={NavBar} />
        <Route path="/MManagement" component={VehicleSelect} />
        <Route path="/type/:id" component={TabSelect} />
        <Route path="/editPlan/:id/:planId" component={EditPlan} />
        <Route path="/" component={Footer} />
      </switch>
    </Router>
  )
}

export default App
