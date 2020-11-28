import {PlanetActions} from "../constants";

const initialState = {
    isLoading: false,
    planet: {},
    error: null
};

const planetReducer = (state = initialState, action) => {
    switch (action.type) {
        case PlanetActions.PLANET_REQUEST:
            return {
                ...state,
                isLoading: true,
                planet: {}
            };
        case PlanetActions.PLANET_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                planet: action.payload,
                error: null
            };
        case PlanetActions.PLANET_REQUEST_ERROR:
            return {
                ...state,
                isLoading: false,
                planet: {},
                error: action.payload
            };
        default: return state
    }

};

export default planetReducer
