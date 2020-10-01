document.getElementById('getweatherbtn').addEventListener('click', weather);

// trying to get enter button working
// document.getElementById('zipcode').addEventListener('keydown', weather);
// // btn.addEvenListener('keyup', weather )

// document.getElementById('zipcode').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//       // code for enter
//     }
// });

async function weather() {
    let zip = document.getElementById('zipcode').value;

    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&id=524901&APPID=7d6e027f5071940f5e717a436c7b3c47`);

    // data now = json
    const data = await resp.json();
    //console.log(JSON.stringify(data));

    // api returns 404 if invalid zip
    // alert if invalid
    if (data.cod == "404") {
        alert('please enter a valid 5-digit US zip-code')
    }
    // another alert if not complete
    // returns if 'bad request'
    else if (data.cod == "400"){
        alert('Please enter a valid 5-digit US zip-code')
    }
    // else run function and display
    else {
        let cityName = data.name;
        let conditions = data.weather['0'].description;
        console.log(conditions);
        let temp = data.main.temp;
        //pulling icon based on json code
        let iconCode = data.weather['0'].icon;
        
        document.getElementById("city").innerHTML = cityName;
        document.getElementById("conditions").innerHTML = conditions;
        var tempf = document.getElementById("tempF");
        var tempc = document.getElementById("tempC");
        var tempk = document.getElementById("tempK");
        var icon = document.getElementById("weatherIcon");
        icon.src = `http://openweathermap.org/img/wn/${iconCode}@4x.png`;
        //temp conversions
        tempf.innerHTML = Math.floor((temp - 273.15) * 9 / 5 + 32) + '&deg;' + "F";
        tempc.innerHTML = Math.floor(temp - 273.15) + '&deg;' + "C";
        tempk.innerHTML = Math.floor(temp) + '&deg;' + "K";

        console.log(data.cod);
    }
}

        