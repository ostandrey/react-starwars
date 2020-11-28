import {HeroActions} from "../constants";

const initialState = {
    isLoading: false,
    hero: {},
    error: null
};

const heroReducer = (state = initialState, action) => {
    switch (action.type) {
        case HeroActions.HERO_REQUEST:
            return {
                ...state,
                isLoading: true,
                hero: {}
            };
        case HeroActions.HERO_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hero: action.payload,
                error: null
            };
        case HeroActions.HERO_REQUEST_ERROR:
            return {
                ...state,
                isLoading: false,
                hero: {},
                error: action.payload
            };
        default: return state
    }

};

export default heroReducer
