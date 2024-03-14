function createList() {
    const element = document.createElement('select');
    element.classList.add('list');
    element.setAttribute('id', 'list');
    element.innerHTML = `
    <option value="Odesa" selected>Одеса</option>
    <option value="Kyiv">Київ</option>
    <option value="Lviv">Львів</option>
    <option value="Kharkiv">Харьків</option>
    `;
    const weatherBlock = document.querySelector('#weather');
    const out = document.querySelector('#out');
    weatherBlock.insertBefore(element, out);
}

createList();

function showWeather(data) {
    document.querySelector('#city').textContent = `Погода в ${data.name}`;
    document.querySelector('#temp').innerHTML = `+${Math.floor(data.main.temp - 273)}&degC`;
    document.querySelector('#icon').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.querySelector('#desc').innerHTML = `Опис: ${data.weather[0].description}`;
    document.querySelector('#windDirection').innerHTML = `Напрямок вітру: ${data.wind.deg}&deg`;
    document.querySelector('#windSpeed').innerHTML = `Швидкість вітру: ${data.wind.speed} м/с`;
    document.querySelector('#pressure').innerHTML = `Тиск: ${data.main.pressure} Па`;

}

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=93c9d5137fca137da00572b00de5fa34`)
        .then((response) => response.json())
        .then((data) => showWeather(data))
        .catch((error) => console.error(error));
}

document.querySelector('#btn').onclick = function () {
    const city = document.querySelector('#list').value;
    getWeather(city);
};
window.onload = function () {
    const city = document.querySelector('#list').value;
    getWeather(city);
}