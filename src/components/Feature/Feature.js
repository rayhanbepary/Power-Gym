import React from 'react';
import FeatureData from '../../Data/feature';
import FeatureCard from './FeatureCard';

const Feature = () => {

    return (
        <div className="feature-wrapper">
            <div className="container">
                <div className="row">
                    {
                        FeatureData.map(feature => <FeatureCard key={feature.id} feature={feature} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Feature;