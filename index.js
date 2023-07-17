const zodiac = document.getElementById("zodiac");
const body = document.body;

const changeBackground = () => {
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "#ff2400";
            break;
        case "tarus":
            body.style.backgroundColor = "#008000";
            break;
        case "gemini":
            body.style.backgroundColor = "#33FF57";
            break;
        case "cancer":
            body.style.backgroundColor = "#b0e0e6";
            break;
        case "leo":
            body.style.backgroundColor = "#ff4500";
            break;
        case "virgo":
            body.style.backgroundColor = "#ffd700";
            break;
        case "libra":
            body.style.backgroundColor = "#87cefa";
            break;
        case "scorpio":
            body.style.backgroundColor = "#9932cc";
            break;
        case "sigittarius":
            body.style.backgroundColor = "#ff1493";
            break;
        case "aquarius":
            body.style.backgroundColor = "#00ced1";
            break;
        case "capricorn":
            body.style.backgroundColor = "#00008b";
            break;
        case "pisces":
            body.style.backgroundColor = "#800080";
            break;
        default:
            break;
    }
}
