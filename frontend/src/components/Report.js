import React from 'react';
import { useSelector } from 'react-redux';

const Report = () => {
    const emissions = useSelector((state) => state.emission.emissions);

    return (
        <div>
            <h2>Emission Report</h2>
            <ul>
                {emissions.map((emission, index) => (
                    <li key={index}>{emission.date}: {emission.value} tons of CO2</li>
                ))}
            </ul>
        </div>
    );
};

export default Report;
