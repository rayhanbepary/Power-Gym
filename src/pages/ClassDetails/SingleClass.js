import React from 'react';
import { useParams } from 'react-router';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import ClassData from '../../Data/classes';
import Details from './Details';

const SingleClass = () => {

    let { slug } = useParams();

    // find single class
    const singleClass = ClassData.find(singleClass => singleClass.slug === slug );

    return (
        <React.Fragment>
            <Navigation></Navigation>
            <Banner text={singleClass.title}></Banner>
            <Details singleClass={singleClass}></Details>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default SingleClass;