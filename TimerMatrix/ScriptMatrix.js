'use strict'

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

const text = 'до прилёта Олега, Тани, Саши и Артёма';

for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.id = `id${i}`;
    span.innerText = text[i];
    document.getElementById('mainText').appendChild(span);
}


window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.page').style.height = document.documentElement.scrollHeight + 'px';
    document.querySelector('.page').style.width = document.documentElement.scrollWidth + 'px';
    let arrElem = [
        document.getElementById('days'),
        document.getElementById('hours'),
        document.getElementById('minutes'),
        document.getElementById('seconds')
    ];
    setInterval(() => {
        const nextTime = randomInteger(2000, 4500);
        const nextTimeLetter = randomInteger(3000, 8000);
        const randomDiv = randomInteger(0, 3);
        setTimeout(() => {
            arrElem[randomDiv].style.textShadow = '0 0 3px rgba(131, 131, 131, 0.9)';
            setTimeout(() => arrElem[randomDiv].style.textShadow = '0 0 7px rgba(32, 170, 245, 0.9)', randomInteger(200, 1000))
        }, nextTime);

        setTimeout(() => {
            const randomLetter = randomInteger(1, text.length - 1);
            if (text[randomLetter] !== ' ' && text[randomLetter] !== ','){
                const countBlink = randomInteger(1, 4);
                for (let i = countBlink; i < countBlink; i++){
                    document.getElementById(`id${randomLetter}`).style.textShadow = '0 0 3px rgba(131, 131, 131, 0.9)';
                    setTimeout(() => document.getElementById(`id${randomLetter}`).style.textShadow = '0 0 7px rgba(32, 170, 245, 0.9)', randomInteger(50, 200) * i)
                }
                document.getElementById(`id${randomLetter}`).style.textShadow = '0 0 3px rgba(131, 131, 131, 0.9)';
                setTimeout(() => document.getElementById(`id${randomLetter}`).style.textShadow = '0 0 7px rgba(32, 170, 245, 0.9)', randomInteger(200, 1000))
            }
        }, nextTimeLetter);
    }, 2500);


    const C = document.querySelector("canvas"),
        $ = C.getContext("2d"),
        W = (C.width = window.innerWidth),
        H = (C.height = window.innerHeight);

    const str = "А+Б0В-Г1Д=Е2Ё Ж3З И4Й К5Л М6Н О7П Р8С Т9У Ф!Х Ц?Ч Ш.ЩЪ,Ы Ь:ЭЮ;Я",
        matrix = str.split("");

    let font = 11,
        col = W / font,
        arr = [];

    for (let i = 0; i < col; i++) arr[i] = 1;

    function draw() {
        $.fillStyle = "rgba(0,0,0,.05)";
        $.fillRect(0, 0, W, H);
        $.fillStyle = "#0f0";
        $.font = font + "px system-ui";
        for (let i = 0; i < arr.length; i++) {
            let txt = matrix[Math.floor(Math.random() * matrix.length)];
            $.fillText(txt, i * font, arr[i] * font);
            if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
            arr[i]++;
        }
    }

    setInterval(draw, 123);

    window.addEventListener("resize", () => location.reload());

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

getTime();


