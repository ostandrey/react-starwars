import axios from 'axios'
import {HeroesActions} from "../constants";

export const getHeroes = () => {
    return (dispatch) => {
        dispatch(getHeroesStarted());
        axios.get('https://swapi.dev/api/people')
            .then(res => {dispatch(getHeroesSuccess(res.data.results))})
            .catch(error => {dispatch(getHeroesError(error))})
    }
};

const getHeroesStarted = () => ({
    type: HeroesActions.HEROES_REQUEST
});

const getHeroesSuccess = (heroes) => ({
    type: HeroesActions.HEROES_REQUEST_SUCCESS,
    payload: heroes
});

const getHeroesError = (error) => ({
    type: HeroesActions.HEROES_REQUEST_ERROR,
    paylod: error
});

