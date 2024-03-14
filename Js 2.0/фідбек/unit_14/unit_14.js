

      const param = {
         'url' : "https://api.openweathermap.org/data/2.5/",
         'appid' : '12b8cf64583118ee47eac832faf7decd'
      }
      const cities = {
         706483 : 'Kharkiv',
         703448 : 'Kyiv',
         702550 : 'Lviv',
         698740 : 'Odessa',
        
      }
// /--------------------------------/

      let select = document.createElement('select');
       select.id = 'cities';
      
         for (let key in cities) {
            
            let option = document.createElement('option');
            option.value = key;
            option.textContent = cities[key];
            select.append(option);
            let out = '';
            for ( key in cities ) {
               if (key === cities[key]) {
                  out = cities;
               }
            }
           
         }
         
       
         console.log(select);
         document.querySelector('.city-name').append(select);
        
         


   function getWeather () {
      const cityId = document.querySelector('#cities').value;
      

      
      fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
      .then(weather => {
         return weather.json();
      }) .then(showWeather)
         
      }
      getWeather();
      document.querySelector('#cities').onchange = getWeather;  
      
   
   function showWeather (data) {
      
      
      let out = '';
      for ( key in cities) {
         
            out = cities[key];
         
      }

      document.querySelector('.package-name').textContent = data.name;
      document.querySelector('.price').innerHTML = Math.round(data.main.temp) +'&deg C' ;
      document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
      document.querySelector('.wind').innerHTML = `${data.wind.speed} m/s`
      document.querySelector('.pressure').innerHTML = `${data.main.pressure} millibars`;
      document.querySelector('#img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      document.querySelector('.deg').style.transform =  'rotate(data.wind.deg)';
      console.log(data)
      document.querySelector('.out').innerHTML = out
   }
   
   getWeather();
   document.querySelector('#cities').onchange = getWeather;
