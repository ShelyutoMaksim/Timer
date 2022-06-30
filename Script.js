'use strict'

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.page').style.height = (document.documentElement.scrollHeight - 75) + 'px';
    document.querySelector('.page').style.width = document.documentElement.scrollWidth + 'px';
});
const deadline = '2022-07-15T05:35:00';


function setTime() {
    let controlTime = Date.parse(deadline) - new Date();
    let days, hours, minutes, seconds;
    if (controlTime < 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    } else {
        days = Math.floor(controlTime / (1000 * 60 * 60 * 24));
        hours = Math.floor((controlTime / 1000 / 60 / 60) % 24);
        minutes = Math.floor((controlTime / 1000 / 60) % 60);
        seconds = Math.floor((controlTime / 1000) % 60);
    }

    return {
        "title": controlTime,
        days,
        hours,
        minutes,
        seconds
    };
}

function addZero(num) {
    if (num >= 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

function getTime() {
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');
    const timerInterval = setInterval(updateTime, 1000);
    updateTime();

    function updateTime() {

        const t = setTime();

        days.innerHTML = addZero(t.days);
        hours.innerHTML = addZero(t.hours);
        minutes.innerHTML = addZero(t.minutes);
        seconds.innerHTML = addZero(t.seconds);

        if (t.title <= 0) {
            clearInterval(timerInterval);
        }
    }
}

let light = false;

function toggleLight() {
    light = !light;
    const body = document.querySelector('body');
    body.className = light ? '' : 'mainAnimation';
    const btn = document.querySelector('.btn')
    btn.className = light ? 'btn btn-sm btn-dark' : "btn btn-sm btn-light";
    if (light) {
        body.style.backgroundImage = 'radial-gradient(circle, rgb(255 255 255) 0%, rgb(177 185 255) 100%)';
        btn.textContent = 'Выключить свет';
    } else {
        body.style.backgroundColor = 'unset';
        body.style.backgroundImage = 'radial-gradient(circle, rgba(153, 187, 248, 0.49) 0%, rgb(0, 0, 0) 50%)';
        body.style.backgroundPosition = 'center center';
        btn.textContent = 'Включить свет';
    }
}


getTime();
