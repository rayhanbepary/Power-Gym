import React from 'react';
import ClassCard from './ClassCard';
import ClassData from '../../Data/classes';

const Class = () => {
    console.log(ClassData);
    return (
        <div className="class-wrapper">
            <div className="container">
                <div className="row">
                    {
                        ClassData.map(classes => <ClassCard key={classes.id} classes={classes} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Class;