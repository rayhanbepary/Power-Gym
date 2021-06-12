import React, { Component } from 'react';
import { BiCheck } from 'react-icons/bi';

class Progress extends Component {


    render() {

        let { step } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="member-progress-bar">
                            <div className="step">
                                <div className={step > 1 ? "bullet-check" : "bullet"}>
                                    {step > 1 ? <span className="check-icon"><BiCheck/></span> : <span style={{color: '#ffffff'}}>1</span>}
                                </div>
                                <p>Personal Details</p>
                            </div>
                            <div className="step">
                                <div className={step > 2 ? "bullet-check" : "bullet"}>
                                    {step > 2 ? <span className="check-icon"><BiCheck/></span> : <span style={{color: '#ffffff'}}>2</span>}
                                </div>
                                <p>Bank Payment</p>
                            </div>
                            <div className="step">
                                <div className="bullet">
                                    <span style={{color: '#ffffff'}}>3</span>
                                </div>
                                <p>Membership Created</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Progress;