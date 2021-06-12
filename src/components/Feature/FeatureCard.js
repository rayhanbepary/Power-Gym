import React from 'react';

const FeatureCard = ({feature}) => {

    const {image,icon,title,description} = feature;

    return (
        <div className="col-md-4 feature-card-wrapper">
            <div className="feature-card">
                <img src={image} width="100%" height="400px" alt=""/>
            </div>
            <div className="feature-content">
                <img src={icon} className="feature-icon" alt=""/>
                <div className="feature-text">
                    <h1 className="feature-title">{title}</h1>
                    <p className="feature-description">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;