export const dataCustom = {
    dataUnix: (unix) => new Date(unix * 1000),
    dayMont: (unix) => {
        const date = dataCustom.dataUnix(unix);
        const months = ["янв", "фев", "мар", "апр", "мая", "июня", "июля", "авг", "сен", "окт", "ноя", "дек"];
        const month = months[date.getMonth()];
        const day = date.toISOString().slice(8, 10).replace("T", " ");
        return day + " " + month;
    },
    datTime: (unix) => {
        const date = dataCustom.dataUnix(unix);
        const hours = "0" + date.getHours();
        const minutes = "0" + date.getMinutes();
        return hours.substr(-2) + ":" + minutes.substr(-2);
    }

}
