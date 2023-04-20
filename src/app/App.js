import React, { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./pages/dashboard/index";
import ViewWeather from "./pages/view-weather/index";
import { AppContext } from "./common/context/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetWeather from "./common/apis/index";

const App = () => {
  const [cityWeatherDetails, setCityWeatherDetails] = useState([]);

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_CITY_WEATHER":
        setCityWeatherDetails((prevArray) => [
          ...prevArray,
          payload.newCityWeatherDetailObject,
        ]);
        return;
      case "REMOVE_CITY_WEATHER":
        setCityWeatherDetails(
          cityWeatherDetails.filter(
            (cityWeatherDetails) => cityWeatherDetails.cityId !== payload.cityId
          )
        );
        return;
      case "REMOVE_ALL_CITY_WEATHER":
        setCityWeatherDetails([]);
        return;
      default:
        return;
    }
  };

  useEffect(() => {
    GetWeather(dispatchUserEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppContext.Provider value={{ cityWeatherDetails, dispatchUserEvent }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/view-weather" element={<ViewWeather />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
};
export default App;
