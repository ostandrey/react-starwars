import {PlanetsActions} from "../constants";

const initialState = {
    isLoading: false,
    planets: [],
    error: null
};

const planetsReducer = (state = initialState, action) => {
    switch(action.type) {
        case PlanetsActions.PLANETS_REQUEST:
            return {
                ...state,
                isLoading: true,
                planets: []
            };
        case PlanetsActions.PLANETS_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                planets: action.payload,
                error: null
            };
        case PlanetsActions.PLANETS_REQUEST_ERROR:
            return {
                isLoading: true,
                planets: [],
                error: action.payload
            };
        default:
            return state
    }
};

export default planetsReducer
