import React, { Component } from 'react';

import axios from 'axios';

//create a className and extend Component which is inside the react library
class AddCustomer extends React.Component {
    
    //create a className with given properties(can use all other classes)
    constructor(props) {
        super(props);

        /*
        *setCustomerName() is a user ddefined function. React doesn't know about it.
        *so we need to bind that with library
        */
        this.setCustomerName = this.setCustomerName.bind(this);
        this.setCustomerPhone = this.setCustomerPhone.bind(this);
        this.setCustomerAge = this.setCustomerAge.bind(this);
        this.setCustomerVehicle = this.setCustomerVehicle.bind(this);
        this.saveCustomerData = this.saveCustomerData.bind(this);

        this.state = {
            name: '',
            phone: '',
            age: '',
            vehicle: ''
        }
    }

    //user defined method, takes event input
    setCustomerName(e){
        this.setState({name:e.target.value});
    }

    setCustomerPhone(e) {
        this.setState({phone:e.target.value});
    }

    setCustomerAge(e) {
        this.setState({age: e.target.value});
    }

    setCustomerVehicle(e) {
        this.setState({vehicle: e.target.value});
    }

    saveCustomerData(e) {
        console.log('Customer Data', this.state);

        const Customer = {
            cusName: this.state.name, 
            pnum: this.state.phone,
            age: this.state.age,
            vehicle: this.state.vehicle
        }

        //send data to backend
        //3 parameters: url of bkend api, data to send and configurations(optional)
        axios.post('http://localhost:3001/api/Customer/add', Customer)
        .then(()=> {
            alert('Customer Data Successfuly Inserted');
        }).catch((err) => {
            alert(err.message);
        });

        //after submission, user will redirected here
        //window.location = '/';
    }

    //comes from Component class
    render() {

        //inside return we put what we wanna render to the screen
        return (

            //these tags are not html. they are JSX (JavaScriptXML) elements
            <div>
                <br></br>
                <h3>Add Customer</h3>

                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Enter Your Name :</label>
                    <input type="text"
                        className="form-control"
                        id="formGroupExampleInput" 
                        placeholder="John Doe"
                        value={this.state.name}
                        onChange={this.setCustomerName}>
                    </input>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Enter Your Mobile Number :</label>
                    <input type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="0123456789"
                        value={this.state.phone}
                        onChange={this.setCustomerPhone}>
                    </input>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput3" className="form-label">Enter Your Vehicle ID :</label>
                    <input type="text"
                        className="form-control"
                        id="formGroupExampleInput3" 
                        placeholder="XYZ1234"
                        value={this.state.vehicle}
                        onChange={this.setCustomerVehicle}>
                    </input>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput4" className="form-label">Enter Your Age :</label>
                    <input type="text"
                        className="form-control"
                        id="formGroupExampleInput4"
                        placeholder="32"
                        value={this.state.age}
                        onChange={this.setCustomerAge}>
                    </input><br></br><br></br>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary" type="button" onClick={this.saveCustomerData}>Save Customer</button>
                    </div>
                </div>
            </div>
        );

    }
}

//we exporting them because then only we can import those in a different file
export default AddCustomer;