/**
 * Created by karina on 10/04/17.
 */
"use strict";
import {combineReducers} from 'redux';
import WeatherReducer from './reducer_weather';

//lo que hace esta funcion es darle un key a nuestra global app state que se llamara books
const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;