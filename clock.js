const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds // mini 조건식이라 생각하면 됨 seconds가 10이하면 ?(if) `0${seconds}` :(else) 아니면 seconds
    }`;
}

function init() {
    getTime();
    setInterval(getTime, 1000); // setInterval는 인자를 두개를 받는데 하나는 function, 다음은 간격
}

init();