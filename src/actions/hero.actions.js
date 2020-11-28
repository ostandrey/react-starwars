import axios from 'axios'
import { HeroActions } from "../constants";

export const getHero = (url) => {
    return (dispatch) => {
        dispatch(getHeroStarted());
        axios.get(url)
            .then(res => {dispatch(getHeroSuccess(res.data))})
            .catch(error => {dispatch(getHeroError(error))})
    }
};

const getHeroStarted = () => ({
    type: HeroActions.HERO_REQUEST
});

const getHeroSuccess = (hero) => ({
    type: HeroActions.HERO_REQUEST_SUCCESS,
    payload: hero
});

const getHeroError = (error) => ({
    type: HeroActions.HERO_REQUEST_ERROR,
    payload: error
});

