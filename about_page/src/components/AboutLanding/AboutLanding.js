import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Origins from '../Origins/Origins';
import GrowingTeams from '../GrowingTeam/GrowingTeam';
import './AboutLanding.css'

const AboutLanding = () => {
    return (
        <>
        <div className='about_us'>
            <AboutUs />
        </div>
        <div className='origins'>
            <Origins />
        </div>
        <div className='employee_container'>
            <h2>Employee Divs</h2>
        </div>
        <div className='growing_team'>
            <GrowingTeams />
        </div>
        </>
    )
}

export default AboutLanding;