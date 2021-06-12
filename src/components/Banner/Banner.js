import React from 'react';

const Banner = ({text}) => {
    return (
        <div className="banner-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="display-table">
                            <div className="table-cell">
                                <h2>{text}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;