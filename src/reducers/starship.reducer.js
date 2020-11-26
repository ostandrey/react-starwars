import {StarshipActions} from "../constants";

const initialState = {
    isLoading: false,
    starship: {},
    error: null
};

const starshipReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case StarshipActions.STARSHIP_REQUEST:
            return {
                ...state,
                isLoading: true,
                starship: {}
            };
        case StarshipActions.STARSHIP_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                starship: action.payload,
                error: null
            };
        case StarshipActions.STARSHIP_REQUEST_ERROR:
            return {
                ...state,
                isLoading: false,
                starship: {},
                error: action.payload
            };
        default:
            return state
    }
};

export default starshipReducer
