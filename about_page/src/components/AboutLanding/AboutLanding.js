import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import './AboutLanding.css'

const AboutLanding = () => {
    return (
        <>
        <h1>Hello from Landing</h1>
        <div className='about_us'>
            <AboutUs />
        </div>
        <div className='origins'>
            <h2>Origins</h2>
        </div>
        <div className='employee_container'>
            <h2>Employee Divs</h2>
        </div>
        <div className='growing_team'>
            <h2>Image</h2>
            <h2>What We're Made Of</h2>
        </div>
        </>
    )
}

export default AboutLanding;