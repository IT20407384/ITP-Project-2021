const HRView = (props) => (
  <div>
    <div style={{ width: "50%" }}>
      <div className="InputControl">
        <label>
          <b>Employee ID</b>
        </label>
        <input
          className="empID"
          type="text"
          disabled
          style={{ marginLeft: "68px" }}
        />
        <br></br>
      </div>
      <div className="InputControl">
        <label>
          <b>Employee Name</b>
        </label>
        <input className="empID" type="text" disabled />
        <br></br>
      </div>
    </div>

    <div className="payroll">
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">Basic Salary</th>
            <td>10,000</td>
          </tr>
          <tr>
            <th scope="row">Over Time</th>
            <td>1000</td>
          </tr>
          <tr>
            <th scope="row">Total</th>
            <td colspan="2">
              <b>11,000</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="atdiv">
      <h1 className="AssignTask">Assign Task</h1>
      <ul class="list-group">
        <li class="list-group-item atList">An item</li>
      </ul>
    </div>

    <div className="srdiv">
      <h1>Service Records</h1>
      <ul class="list-group">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </div>
  </div>
);
export default HRView;
