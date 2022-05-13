import React from "react";
import img01 from "./../img/01d.png";
function Week(props) {
    return (
        <div className="page__week week-page">
            <div className="week-page__list">
                {props.all.daily.map((item, idx) => (
                    <div key={idx} className="week-page__item">
                        <div className="week-page__day">{dM(item.dt)}</div>
                        <div className="week-page__icon">
                            {/* <img src={"img/icons/weather/" + item.weather[0].icon + ".png"} alt={item.weather[0].description} /> */}
                            <img src={img01} alt={item.weather[0].description} />
                        </div>
                        <div className="week-page__mm">
                            <div className="week-page__start">
                                {Math.round(item.temp.max)}
                                <span>°</span>
                            </div>
                            <div className="week-page__end">
                                {Math.round(item.temp.min)}
                                <span>°</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
function dM(unix) {
    let dt = new Date(unix * 1000);
    var months = ["янв", "фев", "мар", "апр", "мая", "июня", "июля", "авг", "сен", "окт", "ноя", "дек"];
    var month = months[dt.getMonth()];
    let day = dt.toISOString().slice(8, 10).replace("T", " ");
    return day + " " + month;
}
export default Week;
