import React from "react";

function Show() {
    return (
        <div className="page__show" onClick={toggle}>
            <div className="_left"></div>
            <div className="_center _icon-arr"></div>
            <div className="_right"></div>
        </div>
    );
}

function toggle() {
    const showGrid = document.querySelector(".page__list");
    const showFlex = document.querySelector(".page__week");

    if (showGrid.classList.contains("_active")) {
        showFlex.classList.add("_active");
        showGrid.classList.remove("_active");
    } else {
        showFlex.classList.remove("_active");
        showGrid.classList.add("_active");
    }
}

export default Show;
