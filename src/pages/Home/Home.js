import React from 'react';
import About from '../../components/About/About';
import Choose from '../../components/Choose/Choose';
import Feature from '../../components/Feature/Feature';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Navigation from '../../components/Navigation/Navigation';
import Training from '../../components/Training/Training';

const Home = () => {
    return (
        <React.Fragment>
            <Navigation></Navigation>
            <Hero></Hero>
            <Feature></Feature>
            <About></About>
            <Training></Training>
            <Choose></Choose>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default Home;