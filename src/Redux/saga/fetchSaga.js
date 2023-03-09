import {takeEvery} from 'redux-saga/effects'
import {put} from 'redux-saga/effects'
import axios from 'axios'

function* fetchWeather(action){
    const options = {
        method: 'GET',
        url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
        params: {city: action.payload},
        headers: {
          'X-RapidAPI-Key': 'e408318b81msh4c72ff7bb98e6e3p132bf8jsn309f296904aa',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };

      const data = yield axios.request(options)

      yield put({type:"SET_WEATHER",data:data.data})
}

function* fetchSaga(){
    yield takeEvery("FETCH_WEATHER",fetchWeather)
}


export default fetchSaga