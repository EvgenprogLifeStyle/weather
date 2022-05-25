import React from "react";
import imgNewUrl from "../../assets/imgIcon";
import {dataCustom} from "../../assets/js/script";
import List from "./List";

function ListContainer({value}) {
    let item = value,
        result = '',
        windDeg,
        windRotate,
        temp = item.daily[0].temp.day

    const wind = d => {
        if (d > 45 && d < 135) {
            return {dir: "В", deg: d};
        } else if (d > 135 && d < 225) {
            return {dir: "Ю", deg: d};
        } else if (d > 225 && d < 315) {
            return {dir: "З", deg: d};
        } else {
            return {dir: "C", deg: d};
        }
    }

    windDeg = wind(item.daily[0].wind_deg);
    windRotate = `rotate(${windDeg.deg}deg)`;

    if (temp > 25) {
        result = "Можно и в майке :)";
    } else if (temp > 15) {
        result = "Кофта не помешает";
    } else if (temp > 5) {
        result = "Одень куртку!";
    } else if (temp > -5) {
        result = "Обязательно шапку";
    } else {
        result = "Шапка и валенки!";
    }

    return <List result={result} windRotate={windRotate} item={item} windDeg={windDeg}/>
}

export default ListContainer;
