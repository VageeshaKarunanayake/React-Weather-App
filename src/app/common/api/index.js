import "./../../App.css";
import { citiesData, colourPicker } from "./../../common/global/index";

const API_KEY = "a887664143f89723e33db2d7d21bf81f";

const GetWeather = async (dispatchUserEvent) => {
  citiesData.List.forEach(async (cityDetails, index) => {
    const city = cityDetails.CityCode;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (data) {
      const cityWeatherDetailObject = {
        cityId: city,
        cityName: data.name,
        country: data.sys.country,
        dt: data.dt,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        temp: data.main.temp,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        visibility: data.visibility,
        windSpeed: data.wind.speed,
        windDegree: data.wind.deg,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        colour: colourPicker[index].colour,
      };
      dispatchUserEvent("ADD_CITY_WEATHER", {
        newCityWeatherDetailObject: cityWeatherDetailObject,
      });
    } else {
      console.log("City ID - " + city + " data not fetched");
    }
  });
};

export default GetWeather;
