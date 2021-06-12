import React from 'react';
import Banner from '../../components/Banner/Banner';
import Class from '../../components/Class/Class';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';

const Classes = () => {
    return (
        <React.Fragment>
            <Navigation></Navigation>
            <Banner text="our classes"></Banner>
            <Class></Class>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default Classes;