import React from 'react';
import ChooseData from '../../Data/choose';
import ChooseCard from './ChooseCard';

const Choose = () => {
    return (
        <div className="choose-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center choose-header"><span style={{color: '#FCD842'}}>why</span> choose us</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        ChooseData.map(choose => <ChooseCard key={choose.id} choose={choose} />)
                    }
                </div>
            </div>
            <div className="choose-style"></div>
        </div>
    );
};

export default Choose;