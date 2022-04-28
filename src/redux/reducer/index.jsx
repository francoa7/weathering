import { GET_COORDS_WEATHER, GET_CURRENT_POSITION, GET_NDAY_WEATHER } from "../actions/action-types";

const initialState = {
      currentPosition: {},
      currentWeather: {},
      nextDaysWeather: {}
};

export default function reducer(state = initialState, { type, payload }) {
      switch (type) {
            case GET_CURRENT_POSITION:
                  return {
                        ...state,
                        currentPosition: payload.latitude ? payload : "Mendoza",
                  }
            case GET_COORDS_WEATHER:
                  return {
                        ...state,
                        currentWeather: payload,
                  }

            case GET_NDAY_WEATHER:

                  return {
                        ...state,
                        nextDaysWeather: payload
                  }
            default:
                  return state;
      }
}
