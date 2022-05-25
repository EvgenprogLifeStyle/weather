import React, {useState} from "react";
import apiCity from "../../API/Api";

function Search({rezult}) {
    const [val, setVal] = useState({city: "", country: "", coord: ""});

    function resultCity() {
        localStorage.setItem("weather", JSON.stringify(val));
        document.querySelector(".popup-search").classList.remove("_active");
        document.querySelector(".popup-search__value input").value = "";
        rezult(val);
    };

    const searchCity = async (event) => {
        setVal({...val, city: "..."});

        apiCity.searchCity(event.target.value)
            .then((response) =>
                setVal({city: response.data.name, country: response.data.sys.country, coord: response.data.coord})
            )
            .catch(() => console.clear());

        if (event.target.value === "") setVal({...val, city: ""});
    };

    function searchBtn() {
        const bodyPopup = document.querySelector(".popup-search");

        document.addEventListener("click", function (e) {
            if (e.target.classList.contains("refresh-btn")) {
                bodyPopup.classList.add("_active");
                setVal({...val, city: ""});
            }
            if (e.target.classList.contains("_active")) bodyPopup.classList.remove("_active");
        });
    }

    return (
        <div>
            <div className="refresh-btn _icon-refresh" onClick={searchBtn()}></div>
            <div className="page__popup popup-search">
                <div className="popup-search__body">
                    <div className="popup-search__value">
                        <input type="text" className="input" onChange={(e) => searchCity(e)}
                               placeholder="search for places..."/>
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
