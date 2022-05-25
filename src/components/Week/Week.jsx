import React from "react";
import imgNewUrl from "../../assets/imgIcon";
import {dataCustom} from "../../assets/js/script";

function Week(props) {
    return (
        <div className="page__week week-page">
            <div className="week-page__list">
                {props.all.daily.map((item, idx) => (
                    <div key={idx} className="week-page__item">
                        <div className="week-page__day">{dataCustom.dayMont(item.dt)}</div>
                        <div className="week-page__icon">
                            <img src={imgNewUrl(item.weather[0].icon)} alt={item.weather[0].description}/>
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

export default Week;
