import axios from "axios";

export default class apiCity {
    static async getApi(data) {
        let apiKey = "380a01579c2b5d4df3cfbdbe41d3d2ef";
        let urlAll = `http://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&lang=ru&units=metric&appid=${apiKey}`;
        const response = await axios.get(urlAll);
        return response;
    }
}
