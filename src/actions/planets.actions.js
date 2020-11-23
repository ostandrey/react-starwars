import axios from 'axios'
import {PlanetsActions} from "../constants";

export const getPlanets = () => {
    return (dispatch) => {
        dispatch(getPlanetsStarted());
            axios.get('https://swapi.dev/api/planets')
                .then(res => {dispatch(getPlanetsSuccess(res.data.results))})
                .catch(error => {dispatch(getPlanetsError(error))})
    }
};

const getPlanetsStarted = () => ({
    type: PlanetsActions.PLANETS_REQUEST
});

const getPlanetsSuccess = (planets) => ({
    type: PlanetsActions.PLANETS_REQUEST_SUCCESS,
    payload: planets
});

const getPlanetsError = (error) => ({
    type: PlanetsActions.PLANETS_REQUEST_ERROR,
    paylod: error
});

