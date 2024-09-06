import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmissions } from '../redux/actions/emissionActions';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
    const dispatch = useDispatch();
    const emissions = useSelector((state) => state.emission.emissions);

    useEffect(() => {
        dispatch(getEmissions());
    }, [dispatch]);

    const data = {
        labels: emissions.map((emission) => emission.date),
        datasets: [
            {
                label: 'Carbon Emissions',
                data: emissions.map((emission) => emission.value),
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    return (
        <div>
            <h2>Carbon Emissions Dashboard</h2>
            <Line data={data} />
        </div>
    );
};

export default Dashboard;
