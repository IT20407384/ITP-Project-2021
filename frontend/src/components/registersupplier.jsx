import React, { Component } from 'react';

class registersupplier extends React.Component{

    render(){
        return(

            <div>
                <div class="mb-3 row">
                    <label for="firstN" class="col-sm-2 col-form-label">First Name</label>
                    <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="firstname" /></div>
                </div>

                <div class="mb-3 row">
                    <label for="secondN" class="col-sm-2 col-form-label">Last Name</label>
                    <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="lastname" /></div>
                </div>

                <div class="mb-3 row">
                    <label for="companyN" class="col-sm-2 col-form-label">Company Name</label>
                    <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="companyname" /></div>
                </div>

                <div class="mb-3 row">
                    <label for="SEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="supplierEmail" value="email@example.com"/></div>
                </div>

                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                     <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword"/></div>
                </div>

                <div class="mb-3 row">
                    <label for="CPassword" class="col-sm-2 col-form-label">Confirm Password</label>
                     <div class="col-sm-10">
                    <input type="password" class="form-control" id="confirmPassword"/></div>
                </div>

            </div>


        );
    }
}

export default registersupplier;