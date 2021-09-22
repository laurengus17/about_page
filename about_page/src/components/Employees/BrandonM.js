import React from 'react';
import bm from '../../images/brandonM.png';
import './Employees.css'

const BrandonM = () => {
    return (
        <>
        <div className='employees_display'>
            <img src={bm} alt='brandon' />
            <div className='employee_text_container'>
                <p>Brandon Massie</p>
                <p>CTO</p>
            </div>
        </div>
        </>
    )
}

export default BrandonM;