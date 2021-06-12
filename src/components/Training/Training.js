import React from 'react';
import TrainingData from '../../Data/training';
import TrainingCard from './TrainingCard';

const Training = () => {
    return (
        <div className="training-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center training-header">training <span style={{color: '#FCD842'}}>programs</span></h2>
                    </div>
                </div>
                <div className="row">
                    {
                        TrainingData.map(training => <TrainingCard key={training.id} training={training} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Training;