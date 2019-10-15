$('.menu .item')
  .tab()
;




































$.get("http://ip-api.com/json/112.196.77.202?fields=status,country,countryCode,region,regionName,city,zip,lat,lon,timezone,query",
    function( res ){
        lon=res.lon
        lat=res.lat
        $("#location").html(res.city+', '+res.country);
        console.log(res)
        console.log(lat,lon)
    })

    




/*

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather);
  } else { 
    console.log("Geolocation is not supported by this browser.");
  }

  



getWeather();
var myVar = setInterval(getWeather, 600000);

//api for weather
function getWeather(position) {
      //lat = position.coords.latitude;
      //long = position.coords.longitude;
      let url = 'http://api.openweathermap.org/data/2.5/weather?lat='+ 30.691010  +'&lon='+ 76.695007 +'&APPID=142397196031e2e9ee4776fadcfb06b4&units=metric';
fetch(url)
.then(res => res.json())
.then((out) => {
  var x = out;
  console.log(x);
  //Weather icons to be listed
  switch (x.weather[0].icon) {
    case "01d":
        img_loc = "https://img.icons8.com/doodle/125/000000/sun.png";
        break;
    case "01n":
        img_loc = "https://img.icons8.com/dusk/125/000000/bright-moon.png";
        break;
    case "02d":
        img_loc = "https://img.icons8.com/color/125/000000/partly-cloudy-day.png";
        break;
    case "02n":
          img_loc = "https://img.icons8.com/clouds/125/000000/bright-moon.png";
          break;
    case "03d":
          img_loc = "https://img.icons8.com/doodle/125/000000/partly-cloudy-day.png";
          break;
    case "03n":
          img_loc = "https://img.icons8.com/clouds/125/000000/partly-cloudy-night.png";
          break;
    case "04d":
          img_loc = "https://img.icons8.com/dusk/125/000000/clouds.png";
          break;
    case "04n":
          img_loc = "https://img.icons8.com/dusk/125/000000/clouds.png";
          break;
    case "09d":
          img_loc = "https://img.icons8.com/clouds/125/000000/rain.png";
          break;
    case "09n":
          img_loc = "https://img.icons8.com/clouds/125/000000/rain.png";
          break;
    case "10d":
          img_loc = "https://img.icons8.com/clouds/125/000000/rain.png";
          break;
    case "10n":
          img_loc = "https://img.icons8.com/clouds/125/000000/rain.png";
          break;
    case "11d":
          img_loc = "https://img.icons8.com/dusk/125/000000/storm.png";
          break;
    case "11n":
          img_loc = "https://img.icons8.com/dusk/125/000000/storm.png";
          break;
    case "13d":
          img_loc = "https://img.icons8.com/dusk/125/000000/snowflake.png";
          break;
    case "13n":
          img_loc = "https://img.icons8.com/dusk/125/000000/snowflake.png";
          break;
    case "50d":
          img_loc = "https://img.icons8.com/ultraviolet/125/000000/fog-day.png";
          break;
    case "50n":
          img_loc = "https://img.icons8.com/doodle/125/000000/sun.png";
          break;

      default:
          break;
  }

//changes on main page
  document.getElementById('region').innerHTML=x.name+' , '+x.sys.country;
  document.getElementById('temp').innerHTML=x.main.temp+' <sup>&deg</sup> ';
  document.getElementById('wimage').src= img_loc ;
  document.getElementById('wdesc').innerHTML=x.weather[0].description;
  document.getElementById('wind').innerHTML=x.wind.speed  + " Km/h   -  " + x.wind.deg + "&deg" ;
  document.getElementById('humidity').innerHTML=x.main.humidity + " % ";
  document.getElementById('pressure').innerHTML=x.main.pressure + " mb ";
  document.getElementById('fog').innerHTML=x.visibility;
  document.getElementById('sea').innerHTML=x.main.sea_level;
})
.catch(err => { throw err });
}

*/






var options = {
    
    chart: {
      toolbar:{show:false},
      type: 'line',
      height: '100%',
      width: '100%'
    },
    series: [{
      name: 'Forecast',
      data: [30,40,35,50,49,45]
    }],
    xaxis: {
      categories: ['sunday','monday','tuesday','wednesday','thursday','friday']
    },
    dataLabels: {
        enabled: true,
    },
    tooltip: {
        enabled: false,
    },
    yaxis: {
        show: false,
    },
    grid: {
        show: false,
    },

  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();