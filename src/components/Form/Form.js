import React, { Component } from 'react';
import Created from './Created';
import Payment from './Payment';
import PersonalDetails from './PersonalDetails';
import Progress from './Progress';

class Form extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        birthDate: '',
        address: '',
        country: '',
        city: '',
        postcode: '',
        paymentMethod: '',
        cardNumber: '',
        nameOnCard: '',
        cvvCode: '',
        expiryDate: ''
    }

    // next step handler
    nextStep = () => {
        const { step } = this.state; 
        this.setState({ step: step + 1 });
    };

    // previous step handler
    prevStep = () => {
        const { step } = this.state; 
        this.setState({ step: step - 1 });
    };

    // input change handler
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    // form submit handler
    submitHandler = (event) => {
        event.preventDefault();
        alert("Membership has been created successfully")
        this.setState({
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            gender: '',
            birthDate: '',
            address: '',
            country: '',
            city: '',
            postcode: '',
            paymentMethod: '',
            cardNumber: '',
            nameOnCard: '',
            cvvCode: '',
            expiryDate: ''
        }) 

    }

    render() {

        const { step, firstName,lastName, email, phone, gender, birthDate, address, country, city, postcode, paymentMethod, cardNumber, nameOnCard, cvvCode,  expiryDate } = this.state;

        const values = { firstName,lastName, email, phone, gender, birthDate, address, country, city, postcode, paymentMethod, cardNumber, nameOnCard, expiryDate, cvvCode }

        switch (step) {
            case 1:
                return (
                    <>
                        <Progress step={step}></Progress>
                        <form onSubmit={this.submitHandler}>
                            <PersonalDetails
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                        </form>
                    </>
                );
                break;
            case 2:
                return (
                    <>
                        <Progress step={step}></Progress>
                        <form onSubmit={this.submitHandler}>
                            <Payment
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                        </form>
                    </>
                );
                break;
                case 3:
                    return (
                        <>
                            <Progress step={step}></Progress>
                            <form onSubmit={this.submitHandler}>
                                <Created
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    values={values}
                                />
                            </form>
                        </>
                    );
                    break;
        
            default:
                return (
                    <h1 style={{marginBottom: '100px', textAlign: 'center'}}>You are not eligible for becoming a member of our gym.</h1>
                );
                break;
        }

    }
}

export default Form;