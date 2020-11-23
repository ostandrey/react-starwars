import { combineReducers } from "redux";
import starships from "./starships.reducer";
import planets from "./planets.reducer";

const rootReducer = combineReducers({
    starships,
    planets
});

export default rootReducer
