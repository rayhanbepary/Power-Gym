import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ClassCard = ({classes}) => {
    return (
        <div className="col-md-4 class-card-wrapper">
            <img className="class-img" src={classes.image} width="100%" height="400px" alt=""/>
            <Link to={`/class/${classes.slug}`} className="class-link">
                <h1 className="class-title">
                    {classes.title}
                    <span style={{marginLeft: '20px', fontSize: "23px"}}><FiArrowRight /></span>
                </h1>
            </Link>
        </div>
    );
};

export default ClassCard;