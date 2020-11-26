import { HeroesActions } from "../constants";

const initialState = {
    isLoading: false,
    heroes: [],
    error: null
};

const heroesReducer = (state = initialState, action) => {
    switch(action.type) {
        case HeroesActions.HEROES_REQUEST:
            return {
                ...state,
                isLoading: true,
                heroes: []
            };
        case HeroesActions.HEROES_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                heroes: action.payload,
                error: null
            };
        case HeroesActions.HEROES_REQUEST_ERROR:
            return {
                isLoading: true,
                heroes: [],
                error: action.payload
            };
        default:
            return state
    }
};

export default heroesReducer
