import axios from "axios";
import { GET_COORDS_WEATHER, GET_CURRENT_POSITION, GET_NDAY_WEATHER } from "./action-types";

export function getCurrentPosition() {
      return function (dispatch) {
            const geo = navigator.geolocation;

            return geo.getCurrentPosition((position) => {
                  console.log(position);
                  const coords = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                  }

                  dispatch({
                        type: GET_CURRENT_POSITION,
                        payload: coords
                  })
            }, (err) => {
                  alert(err.message)
                  console.log(err)
            });

      }
}

export function getCurrentWeather(params) {
      return function (dispatch) {
            let url = "";
            if (typeof params === "string") {
                  url = `https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=204a511ed58f5c5b3fdd3383f309b3e1&units=metric`
            } else url = `https://api.openweathermap.org/data/2.5/weather?lat=${params.latitude}&lon=${params.longitude}&appid=204a511ed58f5c5b3fdd3383f309b3e1&units=metric`

            return axios.get(url)
                  .then((response) => {
                        dispatch({
                              type: GET_COORDS_WEATHER,
                              payload: response.data
                        })
                  })
                  .catch((err) => (err))
      }
}

export function getNextDaysWeather(params) {
      return function (dispatch) {
            let url = "";
            if (typeof params === "string") {
                  url = `https://api.openweathermap.org/data/2.5/forecast?q=${params}&appid=204a511ed58f5c5b3fdd3383f309b3e1&units=metric`
            } else url = `https://api.openweathermap.org/data/2.5/forecast?lat=${params.latitude}&lon=${params.longitude}&appid=204a511ed58f5c5b3fdd3383f309b3e1&units=metric`;
            return axios.get(url)
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