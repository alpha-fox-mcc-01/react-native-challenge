import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useFetcher() {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getCurrentWeather = keyword => {
    setLoading(true);
    axios({
      method: "GET",
      url:
        "http://api.weatherstack.com/forecast?access_key=f45cdcbdb526f2b62d669baa8e566f7b&query=" +
        keyword
    })
      .then(({ data }) => {
        if (data.error) {
          setLoading(false);
          setError(data.error);
        } else {
          setLoading(false);
          setError(false);
          setWeatherData(data);
        }
      })
      .catch(setError);
  };

  return { weatherData, getCurrentWeather, loading, error };
}
