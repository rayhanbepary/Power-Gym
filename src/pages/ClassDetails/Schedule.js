import React from 'react';

const Schedule = ({time}) => {
    return (

        <div className="col-md-6 mb-4">
            <div className="schedule">
                <h5>{time.day}</h5>
                <p>{time.time}</p>
            </div>
        </div>

    );
};

export default Schedule;