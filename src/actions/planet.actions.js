import axios from 'axios'
import {PlanetActions} from '../constants'

export const getPlanet = (url) => {
    return (dispatch) => {
            dispatch(getPlanetStarted());
                axios.get(url)
                    .then(res => {dispatch(getPlanetSuccess(res.data))})
                    .catch(error => {dispatch(getPlanetError(error))})
    }
};

const getPlanetStarted = () => ({
    type: PlanetActions.PLANET_REQUEST
});

const getPlanetSuccess = (planet) => ({
    type: PlanetActions.PLANET_REQUEST_SUCCESS,
    payload: planet
});

const getPlanetError = (error) => ({
    type: PlanetActions.PLANET_REQUEST_ERROR,
    payload: error
});
