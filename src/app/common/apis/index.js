import "./../../App.css";
import { citiesData, colourPicker, cacheName } from "../global/variables/index";

const GetHttpResponse = async (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
  const cacheResponse = await getAllCacheData(cacheName, url);

  if (cacheResponse) {
    return cacheResponse;
  } else {
    const api_call = await fetch(url);
    const response = await api_call.json();
    addDataIntoCache(cacheName, url, response);
    return response;
  }
};

const addDataIntoCache = (cacheName, url, response) => {
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

const getAllCacheData = async (cacheName, url) => {
  var names = await caches.keys();
  var data = null;

  for (const name of names) {
    if (name === cacheName) {
      const cacheStorage = await caches.open(name);
      const cachedResponse = await cacheStorage.match(url);
      const cachedTime = cachedResponse.headers.get("cached_time");
      const timeElapsed = Math.round((Date.now() - cachedTime) / 60000);

      if (timeElapsed < 5) {
        data = await cachedResponse.json();
      } else {
        cacheStorage.delete(url);
      }
      console.log("Elapsed Time " + timeElapsed);
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
        visibility: data.visibility / 1000,
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
