import React from "react";
import imgI from "../img/02d.png";
const Header = (props) => {
    let item = props.top.current;
    let img = "img/icons/weather/" + item.weather[0].icon + ".png";

    return (
        <div className="page__top top-page">
            <div className="top-page__img">
                {/* <img src={imgI} alt={item.weather[0].description} /> */}
                <img src={img} alt={item.weather[0].description} />
            </div>
            <div className="top-page__temp">
                {Math.round(item.temp)}
                <span>°</span>
            </div>
            <div className="top-page__text">
                <div className="top-page__city">
                    {JSON.parse(localStorage.getItem("weather")).city}, <span> {JSON.parse(localStorage.getItem("weather")).country}</span>
                </div>
                <div className="top-page__time">{new Date().toLocaleTimeString().slice(0, -3)}</div>
                <div className="top-page__date" style={{ fontSize: 18 }}>
                    {item.weather[0].description}
                </div>
            </div>
        </div>
    );
};

export default Header;
