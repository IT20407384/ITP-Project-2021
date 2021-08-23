const employeeList = props => (
<div className="tableStyle">
<table className="table table-success table-striped">
      <thead>
    <tr>
     
      <th scope="col">Employee ID</th>
      <th scope="col">Employee Name</th>
      <th style = {{textAlign:"center"}} scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">EID 001</th>
      <td>   Dilith Jayweera</td>
      <td style = {{textAlign:"center"}}>
          <button className = "btn btn-primary btn-sm view">View</button>
          <button className = "btn btn-primary btn-sm edit">Edit</button>
          <button className = "btn btn-primary btn-sm delete">Delete</button>
      </td>
      
    </tr>
    
    <tr>
      <th scope="row">EID 001</th>
      <td>   Dilith Jayweera</td>
      <td style = {{textAlign:"center"}}>
          <button className = "btn btn-primary btn-sm view">View</button>
          <button className = "btn btn-primary btn-sm edit">Edit</button>
          <button className = "btn btn-primary btn-sm delete">Delete</button>
      </td>
      
    </tr>
  </tbody>

  </table>
    <button className = "btn btn-primary btn-sm addEmp">ADD NEW EMPLOYEE</button>

</div>




);

export default employeeList;


