import { GET_COORDS_WEATHER, GET_CURRENT_POSITION } from "../actions/action-types";

const initialState = {
      currentPosition: {},
      currentWeather: {}
};

export default function reducer(state = initialState, { type, payload }) {
      switch (type) {
            case GET_CURRENT_POSITION:
                  return {
                        ...state,
                        currentPosition: payload,
                  }
            case GET_COORDS_WEATHER:
                  return {
                        ...state,
                        currentWeather: payload
                  }
            default:
                  return state;
      }
}
