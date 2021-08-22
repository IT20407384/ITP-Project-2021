import React from "react";
import { Link } from "react-router-dom";

function M_vehicle_type(props) {
  return (
    <div className="data">
      <div className="vehiTypeBtnSet">
        <Link to={"/type/car"}>
          <button type="submit" className="BtnVehiType car">
            <h1 className="btnText">CAR</h1>
          </button>
        </Link>
        <Link to={"/type/bike"}>
          <button type="submit" className="BtnVehiType bike">
            <h1 className="btnText">BIKE</h1>
          </button>
        </Link>
        <Link to={"/type/bike"}>
          <button type="submit" className="BtnVehiType wheel">
            <h1 className="btnText">THREE WHEEL</h1>
          </button>
        </Link>
        <Link to={"/type/other"}>
          <button type="submit" className="BtnVehiType other">
            <h1 className="btnText">OTHER</h1>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default M_vehicle_type;
