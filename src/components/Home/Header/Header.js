import React from 'react';
import HeaderSlider from '../HeaderSlider/HeaderSlider';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderSlider></HeaderSlider>
        </div>
    );
};

export default Header;