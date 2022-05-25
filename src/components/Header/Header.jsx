import React from "react";
import imgNewUrl from "../../assets/imgIcon";

const Header = (props) => {
    const item = props.top.current;
    return (
        <div className="page__top top-page">
            <div className="top-page__img">
                <img src={imgNewUrl(item.weather[0].icon)} alt={item.weather[0].description}/>
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
                <div className="top-page__date" style={{fontSize: 18}}>
                    {item.weather[0].description}
                </div>
            </div>
        </div>
    );
};

export default Header;
