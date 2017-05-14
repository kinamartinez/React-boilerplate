/**
 * Created by karina on 10/04/17.
 */
import {FETCH_WEATHER} from '../actions/index'
export default function (state = [], action) {
    switch (action.type)
    {
        case FETCH_WEATHER:
          //  return state.concat([action.payload.data] );
            return [action.payload.data, ...state]; //este es el mismo de arriva pero diferente aproach con ES&
    }

    return state;
}

//lesson 68 explain