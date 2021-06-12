import React from 'react';
import PlanData from '../../Data/plans';
import PlanCard from './PlanCard';

const Plan = () => {
    return (
        <div className="plan-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 plan-header">
                        <h2><span style={{color: '#FCD842'}}>choose the offer</span> that suits you</h2>
                        <div className="col-md-8 offset-md-2">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when content of a page when content of a page when.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        PlanData.map(plan => <PlanCard key={plan.id} plan={plan} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Plan;