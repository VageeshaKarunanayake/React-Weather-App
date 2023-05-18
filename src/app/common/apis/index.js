import "./../../App.css";
import { citiesData, colourPicker, cacheName } from "../global/constants";
import {
  DateTimeConverter,
  RoundInteger,
  TimeConverter,
} from "../global/functions";

const GetHttpResponse = async (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
  const cacheResponse = await GetAllCacheData(cacheName, url);

  if (cacheResponse) {
    return cacheResponse;
  } else {
    const api_call = await fetch(url);
    const response = await api_call.json();
    AddDataIntoCache(cacheName, url, response);
    return response;
  }
};

const AddDataIntoCache = (cacheName, url, response) => {
  const newHeaders = new Headers();
  newHeaders.set("cached_time", Date.now());

  const data = new Response(JSON.stringify(response), {
    headers: newHeaders,
  });

  if ("caches" in window) {
    caches.open(cacheName).then((cache) => {
      cache.put(url, data);
    });
  }
};

const GetAllCacheData = async (cacheName, url) => {
  var names = new Map([await caches.keys()]);
  var data = null;

  if (names.has(cacheName)) {
    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);
    const cachedTime = cachedResponse.headers.get("cached_time");
    const timeElapsed = Math.round((Date.now() - cachedTime) / 60000);

    if (timeElapsed < 5) {
      data = await cachedResponse.json();
    } else {
      cacheStorage.delete(url);
    }
  }
  return data;
};

const GetWeather = async (dispatchUserEvent) => {
  citiesData.List.forEach(async (cityDetails, index) => {
    const city = cityDetails.CityCode;
    const data = await GetHttpResponse(city);

    if (data) {
      const cityWeatherDetailObject = {
        cityId: city,
        cityNameAndCountry: `${data.name} ${data.sys.country}`,
        dt: DateTimeConverter(data.dt),
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        temp: `${RoundInteger(data.main.temp)}ºc`,
        minTemp: `Temp Min: ${RoundInteger(data.main.temp_min)}ºc`,
        maxTemp: `Temp Max: ${RoundInteger(data.main.temp_max)}ºc`,
        pressure: ` ${data.main.pressure}Pa`,
        humidity: ` ${data.main.humidity}%`,
        visibility: ` ${data.visibility / 1000}km`,
        windDetails: `${data.wind.speed}m/s ${data.wind.deg} Degree`,
        sunrise: ` ${TimeConverter(data.sys.sunrise)}`,
        sunset: ` ${TimeConverter(data.sys.sunset)}`,
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
