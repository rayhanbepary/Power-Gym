import React, { Component } from 'react';

class PersonalDetails extends Component {

    // next button handler
    next = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {

        const { values, handleChange } = this.props;


        return (
            <div className="personalDetails-wrapper">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">

                            <div className="form-group mb-3">
                                <label htmlFor="firstName">First Name</label>
                                <input 
                                    type="text" 
                                    id="firstName"
                                    name="firstName" 
                                    className="form-class"
                                    value={values.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="lastName">Last Name</label>
                                <input 
                                    type="text" 
                                    id="lastName"
                                    name="lastName" 
                                    className="form-class"
                                    value={values.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email" 
                                    className="form-class"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="phone">Mobile Number</label>
                                <input 
                                    type="text" 
                                    id="phone"
                                    name="phone" 
                                    className="form-class"
                                    value={values.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="birthDate">Date of Birth</label>
                                <input 
                                    type="text" 
                                    id="birthDate"
                                    name="birthDate" 
                                    className="form-class"
                                    value={values.birthDate}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label htmlFor="gender">Gender</label>
                                <select 
                                    className="form-class" 
                                    id="gender" 
                                    name="gender" 
                                    onChange={handleChange}
                                >
                                    <option>Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="address">Address</label>
                                <input 
                                    type="text" 
                                    id="address"
                                    name="address" 
                                    className="form-class"
                                    value={values.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="country">Country/Region</label>
                                <input 
                                    type="text" 
                                    id="country"
                                    name="country" 
                                    className="form-class"
                                    value={values.country}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="city">City</label>
                                <input 
                                    type="text" 
                                    id="city"
                                    name="city" 
                                    className="form-class"
                                    value={values.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="postcode">Postcode</label>
                                <input 
                                    type="text" 
                                    id="postcode"
                                    name="postcode" 
                                    className="form-class"
                                    value={values.postcode}
                                    onChange={handleChange}
                                />
                            </div>

                            <button className="join-us next-btn" onClick={this.next}>next</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonalDetails;