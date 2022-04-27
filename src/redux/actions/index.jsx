import axios from "axios";
import { GET_COORDS_WEATHER, GET_CURRENT_POSITION, GET_NDAY_WEATHER } from "./action-types";

export function getCurrentPosition() {
      return function (dispatch) {
            const geo = navigator.geolocation;

            return geo.getCurrentPosition((position) => {
                  const coords = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                  }
                  dispatch({
                        type: GET_CURRENT_POSITION,
                        payload: coords
                  })
            }, (err) => (err));
      }
}

export function getCoordsWeather(coords) {
      return function (dispatch) {

            return axios.get(
                  `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=204a511ed58f5c5b3fdd3383f309b3e1&units=metric`
            ).then((response) => {
                  dispatch({
                        type: GET_COORDS_WEATHER,
                        payload: response.data
                  })
            })
                  .catch((err) => (err))
      }
}

export function getNextDaysWeather(position) {
      return function (dispatch) {

            return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.latitude}&lon=${position.longitude}&appid=204a511ed58f5c5b3fdd3383f309b3e1&units=metric`)
                  .then(response => {
                        dispatch({
                              type: GET_NDAY_WEATHER,
                              payload: response.data
                        })
                  })
                  .catch(err => (err))

      }
}

// export function getPokemons(name) {
//       let url = "";
//       if (name && name.length > 0) url = `/pokemons?name=${name}`;
//       else url = "/pokemons";

//       return function (dispatch) {
//             return axios.get(url).then((response) => {
//                   dispatch({
//                         type: GET_POKEMONS,
//                         payload: response.data,
//                   });
//             });
//       };
// }