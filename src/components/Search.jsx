import React, { useState } from "react";
import axios from "axios";

function Search({ rezult }) {
    const [val, setVal] = useState({ city: "", country: "", coord: "" });

    const resultCity = () => {
        localStorage.setItem("weather", JSON.stringify(val));
        rezult(val);
        document.querySelector(".popup-search").classList.remove("_active");
        document.querySelector(".popup-search__value input").value = "";
    };

    const searchCity = async function (event) {
        setVal({ ...val, city: "..." });
        let apiKey = "380a01579c2b5d4df3cfbdbe41d3d2ef";
        let city = event.target.value;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;

        await axios
            .get(url)
            .then((el) => {
                setVal({ city: el.data.name, country: el.data.sys.country, coord: el.data.coord });
            })
            .catch((err) => {
                console.log(err);
                console.clear();
            });
        if (event.target.value === "") setVal({ ...val, city: "" });
    };
    function searchBtn() {
        const bodyPopup = document.querySelector(".popup-search");

        document.addEventListener("click", (e) => {
            if (e.target.classList.contains("refresh-btn")) {
                bodyPopup.classList.add("_active");
                setVal({ ...val, city: "" });
            }
            if (e.target.classList.contains("_active")) {
                bodyPopup.classList.remove("_active");
            }
        });
    }

    return (
        <div>
            <div className="refresh-btn _icon-refresh" onClick={searchBtn()}></div>
            <div className="page__popup popup-search">
                <div className="popup-search__body">
                    <div className="popup-search__value">
                        <input type="text" className="input" onChange={(e) => searchCity(e)} placeholder="search for places..." />
                        <label className="btn _icon-search"></label>
                    </div>
                    <div className="body-search">
                        <div className="body-search__item">
                            <button onClick={resultCity}>{val.city}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
