const initialState = {
    emissions: [],
    loading: false,
    error: null,
};

export const emissionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_EMISSIONS_SUCCESS':
            return { ...state, emissions: action.payload, loading: false };
        case 'FETCH_EMISSIONS_FAIL':
            return { ...state, error: action.payload, loading: false };
        case 'ADD_EMISSION_FAIL':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};
