
const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "84bd6fe1ede55950afb1947bd8186eab"
}

// const cities =  {
// 	23232 : "london",
// 	33456 : "minsk",
//  }
function getWeather() {
	const cityId = document.querySelector('#city').value;
	fetch(`${param.url}weather?id=${cityId}&appid=${param.appid}`) 
	.then(weather => {
			return weather.json();
		}).then(showWeather);	
}

function showWeather(data) {
    console.log(data);
	document.querySelector('.weather-city').textContent = data.name;
	document.querySelector('.weather-status').textContent = data.weather[0]['main'];
	document.querySelector('.weather-temp').innerHTML = Math.round(data.main.temp - 273) + '&deg';
	document.querySelector('.weather_feels-like').innerHTML = 'Feels like:' + Math.round(data.main.feels_like - 273) + '&deg';
}
getWeather();
document.querySelector('#city').onchange = getWeather;