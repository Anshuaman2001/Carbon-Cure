import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/add-emission">Add Emission</Link></li>
                <li><Link to="/report">Report</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
