import React from 'react';
import AboutPlumbers from '../AboutPlumbers/AboutPlumbers';
import CompanyGoal from '../CompanyGoal/CompanyGoal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NewTools from '../NewTools/NewTools';
import Quotation from '../Quotation/Quotation';
import ServiceCatagories from '../ServiceCatagories/ServiceCatagories';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServiceCatagories></ServiceCatagories>
            <NewTools></NewTools>
            <AboutPlumbers></AboutPlumbers>
            <CompanyGoal></CompanyGoal>
            <Quotation></Quotation>
            <Team></Team>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;