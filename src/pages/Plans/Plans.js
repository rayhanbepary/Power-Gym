import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import Plan from '../../components/Plan/Plan';

const Plans = () => {
    return (
        <React.Fragment>
            <Navigation></Navigation>
            <Banner text="pricing plans"></Banner>
            <Plan></Plan>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default Plans;