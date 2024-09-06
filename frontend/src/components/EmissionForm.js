import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmission } from '../redux/actions/emissionActions';

const EmissionForm = () => {
    const dispatch = useDispatch();
    const [emission, setEmission] = useState({ date: '', value: 0 });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addEmission(emission));
        setEmission({ date: '', value: 0 });
    };

    return (
        <div>
            <h2>Add New Emission</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    value={emission.date}
                    onChange={(e) => setEmission({ ...emission, date: e.target.value })}
                />
                <input
                    type="number"
                    value={emission.value}
                    onChange={(e) => setEmission({ ...emission, value: e.target.value })}
                    placeholder="Emission value"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EmissionForm;
