import React from "react";
import "../css/Scheduled.css";
import { Table, Button } from "react-bootstrap";

export default function ScheduledTable() {
  return (
    <div>
      <Table className="scheduledTable" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Scheduled Id</th>
            <th>Customer ID</th>
            <th>Add Employee</th>
            <th className="btnTD">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SI001</td>
            <td>CUS001</td>
            <td>
              <select
                className="form-select options"
                aria-label="Default select example"
              >
                <option selected>Select a employee</option>
                <option value="1">Saman Kumara</option>
              </select>
            </td>
            <td className="btnTD">
              <Button>ADD</Button>
            </td>
          </tr>
          <tr>
            <td>SI001</td>
            <td>CUS001</td>
            <td>
              <select
                className="form-select options"
                aria-label="Default select example"
              >
                <option selected>Select a employee</option>
                <option value="1">Saman Kumara</option>
              </select>
            </td>
            <td className="btnTD">
              <Button>ADD</Button>
            </td>
          </tr>
          <tr>
            <td>SI001</td>
            <td>CUS001</td>
            <td>
              <select
                className="form-select options"
                aria-label="Default select example"
              >
                <option selected>Select a employee</option>
                <option value="1">Saman Kumara</option>
              </select>
            </td>
            <td className="btnTD">
              <Button>ADD</Button>
            </td>
          </tr>
          <tr>
            <td>SI001</td>
            <td>CUS001</td>
            <td>
              <select
                className="form-select options"
                aria-label="Default select example"
              >
                <option selected>Select a employee</option>
                <option value="1">Saman Kumara</option>
              </select>
            </td>
            <td className="btnTD">
              <Button>ADD</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
