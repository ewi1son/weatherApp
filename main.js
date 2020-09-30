document.getElementById('getweatherbtn').addEventListener('click', weather);

async function weather() {
    let zip = document.getElementById('zipcode').value;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&id=524901&APPID=7d6e027f5071940f5e717a436c7b3c47`);

    // data now = json
    const data = await response.json();
    //console.log(JSON.stringify(data));

    // api returns 404 if invalid zip
    // alert if invalid
    if (data.cod == "404") {
        alert('please enter a valid 5-digit US zip-code')
    }
    else if (data.cod == "400"){
        alert('Please enter a valid 5-digit US zip-code')
    }
    // else run function and display
    else {

        let cityName = data.name;
        
        document.getElementById("city").innerHTML = cityName;

        let currentWeather = data.weather['0'].description;
        
        document.getElementById("currentweather").innerHTML = currentWeather;

        let temp = data.main.temp;
        var tempf = document.getElementById("tempF");
        var tempc = document.getElementById("tempC");
        var tempk = document.getElementById("tempK");

        document.getElementById
        //temp conversions
        tempf.innerHTML = Math.floor((temp - 273.15) * 9 / 5 + 32) + '&deg;' + "F";
        tempc.innerHTML = Math.floor(temp - 273.15) + '&deg;' + "C";
        tempk.innerHTML = Math.floor(temp) + '&deg;' + "K";
        //pulling icon based on json code
        let iconcode = data.weather['0'].icon;
        var icon = document.getElementById("weatherIcon");
        icon.src = `http://openweathermap.org/img/w/${iconcode}.png`;
    }

}












// let iconcode = data.weather['0'].icon;
        
        // var icon = document.getElementById("weathericon");
        // icon.src = `http://openweathermap.org/img/w/${iconcode}.png`;
        