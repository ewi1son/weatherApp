function weatherBalloon(zipCode) {
    var key = 'b582ecc8797bbb61bbc3f200eaa457a3';
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + '&appid=' + key)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            getWeather(data);
        })
        // .catch(function () {
        //     // catch any errors
        // });
}
function getWeather( i ) {
	// var celcius = Math.round(parseFloat(i.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(i.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = i.weather[0].description;
	document.getElementById('temp').innerHTML = fahrenheit + '&deg;' + "f";
    document.getElementById('location').innerHTML = i.name;
}
window.onload = function () {
    weatherBalloon(40509);
}