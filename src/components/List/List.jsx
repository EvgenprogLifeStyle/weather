import React from "react";
import imgNewUrl from "../../assets/imgIcon";
import {dataCustom} from "../../assets/js/script";

function List({item, result, windRotate, windDeg}) {
    return (
        <div className="page__list _active">
            <div className="page__item item-sun">
                <div className="_name">Восход и закат</div>
                <div className="item-sun__items">
                    <div className="item-sun__item">
                        <div className="item-sun__text">{dataCustom.datTime(item.daily[0].sunrise)}</div>
                        <div className="item-sun__icon _icon-arr"></div>
                    </div>
                    <div className="item-sun__item">
                        <div className="item-sun__text">{dataCustom.datTime(item.daily[0].sunset)}</div>
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
                        <div className="dir _icon-arr" style={{transform: windRotate}}></div>
                    </div>
                </div>
            </div>
            <div className="page__item item-pre">
                <div className="_name">Осадки</div>
                <div className="item-pre__items">
                    <div className="item-pre__text">
                        <div className="item-pre__count">{item.daily[0].pop * 100}%</div>
                        {item.daily[0].rain && <div className="item-pre__height">{item.daily[0].rain}мм</div>}
                    </div>
                    <div className="item-pre__img">
                        <img src={imgNewUrl(item.daily[0].weather[0].icon)} alt={item.daily[0].weather[0].description}/>
                    </div>
                </div>
            </div>
            <div className="page__item item-result">
                <div className="item-result__text">{result}</div>
            </div>
        </div>
    );
}

export default List;
