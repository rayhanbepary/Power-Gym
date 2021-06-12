import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import Navigation from '../../components/Navigation/Navigation';

const Membership = () => {
    return (
        <React.Fragment>
            <Navigation></Navigation>
            <Banner text="your gym membership"></Banner>
            <Form></Form>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default Membership;