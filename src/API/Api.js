import axios from "axios";

const API_BASE_URL = 'http://api.openweathermap.org/data/2.5/'
const API_PARAMS_URL = 'lang=ru&units=metric'
const API_KEY = 'appid=380a01579c2b5d4df3cfbdbe41d3d2ef';

const apiCity = {
    getApi: async (data) =>
        await axios.get(`${API_BASE_URL}onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&${API_PARAMS_URL}&${API_KEY}`),
    searchCity: async (city) =>
        await axios.get(`${API_BASE_URL}weather?q=${city}&${API_PARAMS_URL}&${API_KEY}`)
}
export default apiCity