import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';

const PlanCard = ({plan}) => {
    return (
        <div className="col-md-4 plan-card-wrapper">
            <div className="plan-card">
                <img src={plan.image} width="100%" height="560px" alt=""/>
            </div>
            <div className="plan-content">
                <span className="monthly">build monthly</span>
                <h2 className="plan-title">{plan.title}</h2>
                <span className="plan-price">${plan.price}</span>
                <ul>
                    {
                        plan.extras.map(ext => 
                            <li><FiCheck style={{marginRight: "10px"}}/>{ext}</li>
                        )
                    }
                </ul>
                <Link><button className="purchase">purchase</button></Link>
            </div>
        </div>
    );
};

export default PlanCard;