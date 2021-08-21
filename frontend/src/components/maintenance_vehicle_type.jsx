const M_vehicle_type = (props) => (
  <div>
    <div className="vehiTypeBtnSet">
      <button type="submit" className="BtnVehiType car">
        <h1 className="btnText">CAR</h1>
      </button>
      <button type="submit" className="BtnVehiType bike">
        <h1 className="btnText">BIKE</h1>
      </button>
      <button type="submit" className="BtnVehiType wheel">
        <h1 className="btnText">THREE WHEEL</h1>
      </button>
      <button type="submit" className="BtnVehiType other">
        <h1 className="btnText">OTHER</h1>
      </button>
    </div>
  </div>
);

export default M_vehicle_type;
