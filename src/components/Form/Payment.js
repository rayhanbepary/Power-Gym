import React, { Component } from 'react';
import card1 from '../../img/card1.png';
import card2 from '../../img/card2.png';
import card3 from '../../img/card3.png';
import paypal from '../../img/paypal.png';

class Payment extends Component {

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

        const { values, handleChange } = this.props;

        return (
            <div className="payment-wrapper">
                <div className="container">
                    <div className="creditCard">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="form-check mb-3">
                                    <input 
                                        type="radio" 
                                        id="paymentMethod1"
                                        name="paymentMethod" 
                                        className="form-check-input payment-input"
                                        value="Credit Card"
                                        onChange={handleChange}
                                    />
                                    <label className="payment-label" htmlFor="paymentMethod1">Credit Card</label>
                                </div>
                                <p style={{marginLeft: '33px'}}>It is a long established fact that a reader will be distracted by the readable.</p>
                            </div>
                            <div className="col-md-5">
                                <div className="cardCredit">
                                    <img src={card1} alt="" />
                                    <img src={card2} alt="" />
                                    <img src={card3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12" style={{marginTop: '50px'}}>
                                <div className="form-group mb-3">
                                    <label className="card-label" htmlFor="cardNumber">Card Number</label>
                                    <input 
                                        type="text" 
                                        id="cardNumber"
                                        name="cardNumber" 
                                        placeholder="0000 0000 0000 0000"
                                        className="form-card-class"
                                        value={values.cardNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label className="card-label" htmlFor="nameOnCard">Name on Card</label>
                                    <input 
                                        type="text" 
                                        id="nameOnCard"
                                        name="nameOnCard" 
                                        className="form-card-class"
                                        value={values.nameOnCard}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group mb-3">
                                    <label className="card-label" htmlFor="expiryDate">Expiry Date</label>
                                    <input 
                                        type="text" 
                                        id="expiryDate"
                                        name="expiryDate" 
                                        placeholder="MM/YY"
                                        className="form-card-class"
                                        value={values.expiryDate}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group mb-3">
                                    <label className="card-label" htmlFor="cvvCode">cvv Code</label>
                                    <input 
                                        type="text" 
                                        id="cvvCode"
                                        name="cvvCode" 
                                        className="form-card-class"
                                        value={values.cvvCode}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="paypal">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="form-check mb-3">
                                    <input 
                                        type="radio" 
                                        id="paymentMethod2"
                                        name="paymentMethod" 
                                        className="form-check-input payment-input"
                                        value="PayPal"
                                        onChange={handleChange}
                                    />
                                    <label className="payment-label" htmlFor="paymentMethod2">PayPal</label>
                                </div>
                                <p style={{marginLeft: '33px'}}>It is a long established fact that a reader will be distracted by the readable.</p>
                            </div>
                            <div className="col-md-5">
                                <div className="cardPaypal">
                                    <img src={paypal} alt="paypal" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5" style={{display: 'flex', marginLeft: 'auto'}}>
                        <button className="join-us next-btn" onClick={this.back}>back</button>
                        <button className="join-us next-btn" onClick={this.next}>next</button>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Payment;