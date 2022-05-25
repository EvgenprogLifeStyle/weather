import img_01d from './img/01d.png'
import img_01n from './img/01n.png'
import img_02n from './img/02n.png'
import img_03d from './img/03d.png'
import img_03n from './img/03n.png'
import img_04d from './img/04d.png'
import img_04n from './img/04n.png'
import img_09d from './img/09d.png'
import img_09n from './img/09n.png'
import img_10d from './img/10d.png'
import img_10n from './img/10n.png'
import img_11d from './img/11d.png'
import img_11n from './img/11n.png'
import img_13d from './img/13d.png'
import img_13n from './img/13n.png'
import img_50d from './img/50d.png'
import img_50n from './img/50n.png'
import img_02d from "./img/02d.png";

const imgNewUrl = (nameIcon) => {
    let urlImg
    switch (nameIcon) {
        case '01d':
            urlImg = img_01d;
            break
        case '01n':
            urlImg = img_01n;
            break
        case '02d':
            urlImg = img_02d;
            break
        case '02n':
            urlImg = img_02n;
            break
        case '03d':
            urlImg = img_03d;
            break
        case '03n':
            urlImg = img_03n;
            break
        case '04d':
            urlImg = img_04d;
            break
        case '04n':
            urlImg = img_04n;
            break
        case '09d':
            urlImg = img_09d;
            break
        case '09n':
            urlImg = img_09n;
            break
        case '10d':
            urlImg = img_10d;
            break
        case '10n':
            urlImg = img_10n;
            break
        case '11d':
            urlImg = img_11d;
            break
        case '11n':
            urlImg = img_11n;
            break
        case '13d':
            urlImg = img_13d;
            break
        case '13n':
            urlImg = img_13n;
            break
        case '50d':
            urlImg = img_50d;
            break
        case '50n':
            urlImg = img_50n;
            break
    }
    return urlImg;
}
export default imgNewUrl