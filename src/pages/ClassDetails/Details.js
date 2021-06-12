import React from 'react';
import Schedule from './Schedule';
import CheckMark from '../../img/checkmark.png';
import { Link } from 'react-router-dom';

const Details = ({singleClass}) => {

    let { image, description, extras, schedule, slug } = singleClass;
    
    return (
        <div className="details-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="details-container">
                            <img className="details-img" src={image} alt="" />
                            <p style={{marginTop: '30px'}}>{description}</p>
                            <ul>
                                {
                                    extras.map(ext => 
                                    <li>
                                        <img className="CheckMark" src={CheckMark} alt="" />
                                        {ext}
                                    </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container">

                            <div className="row">
                                <h2 className="schedule-header"><span style={{color: '#FCD842'}}>class</span> schedule</h2>
                                {
                                    schedule.map(time => <Schedule time={time} /> )
                                }
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Link to='/membership' style={{textDecoration: 'none'}}><button className="join-us details-btn">join us</button></Link> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;