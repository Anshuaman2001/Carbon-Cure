import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import EmissionForm from './components/EmissionForm';
import Report from './components/Report';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Route path="/" exact component={Dashboard} />
                <Route path="/add-emission" component={EmissionForm} />
                <Route path="/report" component={Report} />
            </div>
        </Router>
    );
};

export default App;
