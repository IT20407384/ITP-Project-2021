import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Customer = props => (
    <tr>
        <td>{props.customer.cusName}</td>
        <td>{props.customer.age}</td>
        <td>{props.customer.pnum}</td>
        <td>{props.customer.vehicle}</td>
    </tr>
)

class CustomerList extends React.Component {

    constructor(props){
        super(props);
        this.state = {Customer:[]};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/Customer/all')
            .then(res => {
                //get all info about a customer
                this.setState({Customer: res.data});
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    customerList() {
        return this.state.Customer.map(currentCustomer => {
            return <Customer customer = {currentCustomer}/>;
        })
    }

    render() {
        return (
            <div>
            <h3>All Customers</h3><br></br>
            <table class="table table-dark table-striped">
                <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Vehicle</th>
            </tr>
            </thead>
                <tbody>
                    {this.customerList() }
                </tbody>
            </table>
            </div>
        );
    }
}

export default CustomerList;