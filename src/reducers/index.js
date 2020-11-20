import { combineReducers } from "redux";
import starships from "./starships.reducer";

const rootReducer = combineReducers({
    starships
});

export default rootReducer
