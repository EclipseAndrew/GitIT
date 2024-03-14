const cityList = {
    'London': 2643743,
    'Kyiv': 703448,
    'Vinnytsia': 689558,
    'Sidney': 2147714,
    'Kasablanka': 2553604,
  };
  
  let currentIndex = 0;
  let cityNames = Object.keys(cityList);
  
  function fetchWeather(cityId) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=a29af38726901b65bc9eca5705b324fe`
      )
        .then((e) => {
          console.log(e);
          return e.json();
        })
        .then((data) => {
          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".deg").innerHTML =
            Math.round(data.main.temp - 273.15) + "&deg;";
          document.querySelector(
            ".icon"
          ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
          document.querySelector(".description").innerHTML =
            data.weather[0].description;
        //    console.log(data);
        });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
      fetchWeather(cityList[cityNames[currentIndex]]);
  });
  
  function changeCityForeward () {
      currentIndex = (currentIndex + 1) % cityNames.length; // тут думав через простий if але так дуже класно (підказали)
      fetchWeather(cityList[cityNames[currentIndex]]);
  }
  
  document.querySelector('.right-clicker').addEventListener('click', changeCityForeward);
//   console.log(cityList[cityNames[currentIndex]]);


function changeCityBack () {
    currentIndex = currentIndex - 1 < 0 ? cityNames.length - 1 : currentIndex - 1; 
    fetchWeather(cityList[cityNames[currentIndex]]);
}

document.querySelector('.left-clicker').addEventListener('click', changeCityBack);


