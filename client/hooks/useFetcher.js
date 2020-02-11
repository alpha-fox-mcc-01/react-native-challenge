import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useFetcher() {
  const [weatherData, setWeatherData] = useState({});

  const getCurrentWeather = keyword => {
    axios({
      method: "GET",
      url:
        "http://api.weatherstack.com/current?access_key=f45cdcbdb526f2b62d669baa8e566f7b&query=" +
        keyword
    })
      .then(({ data }) => {
        setWeatherData(data);
      })
      .catch(console.log);
  };

  return { weatherData, getCurrentWeather };
}
