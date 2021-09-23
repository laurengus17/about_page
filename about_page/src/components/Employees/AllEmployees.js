import React from 'react';
import BrandonM from './BrandonM';
import BrandonV from './BrandonV';
import './Employees.css'

const AllEmployees = () => {
    return (
        <>
        <div className='employees_container'>
            <BrandonV />
            <BrandonM />
        </div>
        </>
    )
}

export default AllEmployees;