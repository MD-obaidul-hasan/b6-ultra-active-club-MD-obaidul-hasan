import React from 'react';
import logo from '../../image/vecteezy_initial-.png';
import './Head.css'
const Head = () => {
    return (
        <nav className='head'>
            <img src={logo} alt="" />
            <h1>Healthy Fitness Center </h1>
        </nav>
    );
};

export default Head;