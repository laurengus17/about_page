import React from 'react';
import bv from '../../images/brandonV.png';
import './Employees.css'

const BrandonV = () => {
    return (
        <>
        <div className='employees_display'>
            <img src={bv} alt='brandon' />
            <div className='employee_text_container'>
                <p>Brandon Veiseh</p>
                <p>CEO and Founder</p>
            </div>
        </div>
        </>
    )
}

export default BrandonV;