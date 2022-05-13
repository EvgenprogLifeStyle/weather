import React from "react";

function List(props) {
    let item = props.value;

    let windDeg = wind(item.daily[0].wind_deg);
    let windRotate = `rotate(${windDeg.deg}deg)`;

    let rezult = "";
    let temp = item.daily[0].temp.day;
    if (temp > 25) {
        rezult = "Можно и в майке :)";
    } else if (temp > 15) {
        rezult = "Кофта не помешает";
    } else if (temp > 5) {
        rezult = "Одень куртку!";
    } else if (temp > -5) {
        rezult = "Обязательно шапку";
    } else {
        rezult = "Шапка и валенки!";
    }

    return (
        <div className="page__list _active">
            <div className="page__item item-sun">
                <div className="_name">Восход и закат</div>
                <div className="item-sun__items">
                    <div className="item-sun__item">
                        <div className="item-sun__text">{dT(item.daily[0].sunrise)}</div>
                        <div className="item-sun__icon _icon-arr"></div>
                    </div>
                    <div className="item-sun__item">
                        <div className="item-sun__text">{dT(item.daily[0].sunset)}</div>
                        <div className="item-sun__icon _icon-arr"></div>
                    </div>
                </div>
            </div>
            <div className="page__item item-tem">
                <div className="_name">Температура</div>
                <div className="item-tem__items">
                    <div className="item-tem__start">
                        {Math.round(item.daily[0].temp.max)}
                        <span>°</span>
                    </div>
                    <div className="item-tem__end">
                        {Math.round(item.daily[0].temp.min)}
                        <span>°</span>
                    </div>
                </div>
            </div>
            <div className="page__item item-vdv">
                <div className="item-vdv__items">
                    <div className="item-vdv__item">
                        Влажность<span>{item.daily[0].humidity}%</span>
                    </div>
                    <div className="item-vdv__item">
                        Давление<span>{item.daily[0].pressure}</span>
                    </div>
                    <div className="item-vdv__item">
                        УФ-индекс<span>{Math.round(item.daily[0].uvi, 2)}</span>
                    </div>
                </div>
            </div>
            <div className="page__item item-wind">
                <div className="_name">Ветер</div>
                <div className="item-wind__items">
                    <div className="item-wind__speed">{Math.round(item.daily[0].wind_speed, 2)} м/c</div>
                    <div className="item-wind__direction">
                        {windDeg.dir}
                        <div className="dir _icon-arr" style={{ transform: windRotate }}></div>
                    </div>
                </div>
            </div>
            <div className="page__item item-pre">
                <div className="_name">Осадки</div>
                <div className="item-pre__items">
                    <div className="item-pre__text">
                        <div className="item-pre__count">{item.daily[0].pop * 100}%</div>
                        <div className="item-pre__height">{item.daily[0].rain}мм</div>
                    </div>
                    <div className="item-pre__img">
                        <img src={"img/icons/weather/" + item.daily[0].weather[0].icon + ".png"} alt={item.daily[0].weather[0].description} />
                    </div>
                </div>
            </div>
            <div className="page__item item-result">
                <div className="item-result__text">{rezult}</div>
            </div>
        </div>
    );
}
function dT(unix) {
    var date = new Date(unix * 1000);
    var hours = "0" + date.getHours();
    var minutes = "0" + date.getMinutes();
    return hours.substr(-2) + ":" + minutes.substr(-2);
}

function wind(d) {
    if (d > 45 && d < 135) {
        return { dir: "В", deg: d };
    } else if (d > 135 && d < 225) {
        return { dir: "Ю", deg: d };
    } else if (d > 225 && d < 315) {
        return { dir: "З", deg: d };
    } else {
        return { dir: "C", deg: d };
    }
}

export default List;
