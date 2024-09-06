import { fetchEmissions, submitEmission } from '../../services/api';

export const getEmissions = () => async (dispatch) => {
    try {
        const response = await fetchEmissions();
        dispatch({ type: 'FETCH_EMISSIONS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_EMISSIONS_FAIL', payload: error.message });
    }
};

export const addEmission = (emission) => async (dispatch) => {
    try {
        await submitEmission(emission);
        dispatch(getEmissions());
    } catch (error) {
        dispatch({ type: 'ADD_EMISSION_FAIL', payload: error.message });
    }
};
