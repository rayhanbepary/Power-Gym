import React, { Component } from 'react';

class Created extends Component {

    // next button handler
    next = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    // back button handler
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {

        const { firstName, lastName, email, phone, gender, birthDate, address, country, city, postcode, paymentMethod, cardNumber, nameOnCard, expiryDate, cvvCode } = this.props.values;


        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="mb-5 text-center" style={{ textTransform: "uppercase" }}><span style={{ color: '#FCD842' }}>Confirm</span> Membership</h1>
                        <ul className="list-group">
                            <li className="list-group-item"><span style={{ fontWeight: 'bold' }}>First Name:</span> {firstName}</li>
                            <li className="list-group-item"><span style={{ fontWeight: 'bold' }}>Last Name:</span> {lastName}</li>
                            <li className="list-group-item"><span style={{ fontWeight: 'bold' }}>Email:</span> {email}</li>
                            <li className="list-group-item"><span style={{ fontWeight: 'bold' }}>Mobile Number:</span> {phone}</li>
                            <li className="list-group-item"><span style={{ fontWeight: 'bold' }}>Gender:</span> {gender}</li>
                            <li className="list-group-item"><span style={{ fontWeight: 'bold' }}>Date of Birth:</span> {birthDate}</li>
                            <li className="list-group-item"><span style={{ fontWeight: 'bold' }}>Address:</span> {address}</li>
                            <li className="list-group-item"><span style={{ fontWeight: 'bold' }}>Country:</span> {country}</li>
                            <li className="list-group-item"><span style={{ fontWeight: 'bold' }}>City:</span> {city}</li>
                            <li className="list-group-item"><span style={{ fontWeight: 'bold' }}>Postcode:</span> {postcode}</li>
                            <li className="list-group-item"><span style={{ fontWeight: 'bold' }}>Payment Method:</span> {paymentMethod}</li>
                            <li className="list-group-item"><span style={{ fontWeight: 'bold' }}>Card Number:</span> {cardNumber}</li>
                            <li className="list-group-item"><span style={{ fontWeight: 'bold' }}>Name On Card:</span> {nameOnCard}</li>
                            <li className="list-group-item"><span style={{ fontWeight: 'bold' }}>Expiry Date:</span> {expiryDate}</li>
                            <li className="list-group-item"><span style={{ fontWeight: 'bold' }}>CVV Code:</span> {cvvCode}</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5" style={{ display: 'flex', marginLeft: 'auto' }}>
                        <button className="join-us next-btn" onClick={this.back}>back</button>
                        <button className="join-us next-btn" type="submit">submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Created;