import React, {useEffect, useState} from "react";
import "./assets/css/index.min.css";
import "./App.scss";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Show from "./components/Show/Show";
import Week from "./components/Week/Week";
import apiCity from "./API/Api";
import ListContainer from "./components/List/ListContainer";

function App() {

    const [apiAll, setApiAll] = useState(false);
    const [api, setApi] = useState();

    useEffect(async () => {
        let response = await apiCity.getApi(JSON.parse(localStorage.getItem("weather")));
        setApiAll(response.data);
    }, []);

    async function searchSet(rezult) {
        const response = await apiCity.getApi(rezult);
        setApi(rezult.city);
        setApiAll(response.data);
    }

    const cityDefault = {city: "Лобковичи", country: "RU", coord: {lon: 31.7563, lat: 53.8394}}
    if (!JSON.parse(localStorage.getItem("weather")))
        localStorage.setItem("weather", JSON.stringify(cityDefault));

    if (!apiAll) return <div className="no_data"><p>Нет данных</p></div>;

    return (
        <div className="page">
            <Header top={apiAll} city={api}/>
            <Search rezult={searchSet}/>
            <ListContainer value={apiAll}/>
            <Show/>
            <Week all={apiAll}/>
        </div>
    );
}

export default App;
