// Global Variables
var searchArr = []
var searchCity = "Seattle";

function getWeather(searchCity) {

    // urlCoordinates
    var coordinates = "https://api.opencagedata.com/geocode/v1/json?q=" + searchCity + "&key=d2d44630ec5c4dffbac4c7d2402d1526"

    $.ajax({
        url: urlCoorinates
    
    }).then(function(response){
        var lat = response.results[0].geometry.lat;
        var long = response.results[0].geometry.lng;

        var weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&appid=56bd33af36828850b44bf66f3ddc97c9"
    })

// Current Day Weather
var current = response.current;

var currentDate = moment.unix(current.dt).format('M/D/YYYY');
var currentTemp = math.round((current.temp * (9/5)) - 459.67) + "&176;";
var windSpeed = (current.windSpeed * 2.23).toFixed(1) + "MPH";
var currentHumidity = current.Humidity + "%"
var currentUV = current.uvi;

// Dom Data
$("#current-header").text(searchCity) + " (" + currentDate + ")";
$("#current-temp").html(currentTemp);
$("#current-wind").text(windSpeed);
$("#current-humidity").text(currentHumidity);
$("#current-icon").attr("src", currentIcon);
$("#current-UV").text(currentUV);


// Five Day Forecast
var daily = response.daily
for(var i = 1; i<6; i++){
    var dailyDate = moment.unix(daily[i].dt).format('M/D/YYYY');
    var dailyTemp = math.round((daily[i].temp * (9/5)) - 459.67) + "&176;";
    var dailyHumidity = daily[i].humidity + "%";
}


}

// Search function
$(document).ready(function() {

    // User input search
    $("#search-btn").on("click", function (event) {
        event.preventDefault();
        var searchInput = $("#search-input").val().trim();

        if (searchInput !== "") {
            searchCity = formatCityName(searchInput);
            getWeatherData(searchCity);
            searchArr.push(searchCity);
            renderCityBtns();
            setStorage();
            
        }
    })
    console.log
})