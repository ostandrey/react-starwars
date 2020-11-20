import {StarshipsActions} from "../constants";

const initialState = {
    isLoading: false,
    starships: [],
    error: null
};

const starshipsReducer = (state = initialState, action) => {
    switch (action.type) {
        case StarshipsActions.STARSHIPS_REQUEST:
            return {
                ...state,
                isLoading: true,
                starships: []
            };
        case StarshipsActions.STARSHIPS_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                starships: action.payload,
                error: null
            };
        case StarshipsActions.STARSHIPS_REQUEST_ERROR:
            return {
                ...state,
                isLoading: false,
                starships: [],
                error: action.payload
            };
        default:
            return state
    }
};

export default starshipsReducer
