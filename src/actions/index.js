/**
 * Created by karina on 10/04/17.
 */
import axios from  'axios'
const API_KEY = "416dbc4f43d4fc48668c53dbc2291d04";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//Se usa como convencion esta forma de declarar el string para luego usarlo en los otros componentes
export const FETCH_WEATHER = "FETCH_WEATHER";


//action creators always has to return an action, (action is an object) that always
//always, always has a type
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); //esto es igual que hacerlo ocn jquery

    console.log("request:", request); //--> esto es una promise

    return {
        type: FETCH_WEATHER,
        payload: request // optional property that goes along with action
        //who has a particular data who describe that action
    }
}


//usamos una libreria que se llama AXIOS porque nos ayuda con el ajax request
//funciona igual que jquery
