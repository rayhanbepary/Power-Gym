import React from 'react';

const ChooseCard = ({choose}) => {
    return (
        <div className="col-md-4">
            <div className="choose-card-wrapper">
                <img src={choose.icon} className="choose-icon" alt="" />
                <h1 className="choose-title">{choose.title}</h1>
                <p className="choose-description">{choose.description}</p>
            </div>
        </div>
    );
};

export default ChooseCard;