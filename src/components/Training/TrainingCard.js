import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const TrainingCard = ({ training }) => {
    return (
        <div className="col-md-6 training-card-wrapper">
            <img src={training.img} width="100%" height="400px" alt="" />
            <h1 className="training-title">
                {training.title} 
                <span style={{marginLeft: '20px', fontSize: "23px"}}><FiArrowRight /></span>
            </h1>
        </div>
    );
};

export default TrainingCard;