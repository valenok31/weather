import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import weather_reducer from "./weather_reducer";
import auch_reducer from "./auch_reducer";

let reducers = combineReducers({
    weather_reducer:weather_reducer,
    auch_reducer:auch_reducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;