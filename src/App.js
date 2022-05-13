import React, { useState, useEffect } from "react";

import "./css/index.min.css";
import "./css/App.css";

import Header from "./components/Header";
import Search from "./components/Search";
import List from "./components/List";
import Show from "./components/Show";
import Week from "./components/Week";

import apiCity from "./API/Api";

function App() {
    const [apiAll, setApiAll] = useState();
    const [api, setApi] = useState();

    useEffect(() => {
        (async function () {
            try {
                let response = await apiCity.getApi(JSON.parse(localStorage.getItem("weather")));
                setApiAll(response.data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, [setApiAll]);

    async function searchSet(rezult) {
        const response = await apiCity.getApi(rezult);
        setApi(rezult.city);
        setApiAll(response.data);
    }

    if (!JSON.parse(localStorage.getItem("weather"))) localStorage.setItem("weather", JSON.stringify({ city: "Лобковичи", country: "RU", coord: { lon: 31.7563, lat: 53.8394 } }));
    if (!apiAll) return <p>Нет данных.</p>;

    return (
        <div className="page">
            <Header top={apiAll} city={api} />
            <Search rezult={searchSet} />

            <List value={apiAll} />
            <Show />

            <Week all={apiAll} />
        </div>
    );
}

export default App;
