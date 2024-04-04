import { useEffect, useState } from "react";
import { IWeatherCity } from "../types/weather";
import { IWeatherList } from "../types/weather";
import axios from "axios";
import "./App.scss";
import DayWeather from "./dayWeather/DayWeather";
import CityTitle from "./cityTitle/CityTitle";

const App = () => {
  const [weatherData, setWeatherData] = useState<IWeatherCity>();
  const [weather, setWeather] = useState<IWeatherList[][]>([]);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const res = await axios.get(
          "http://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=17ddfc1750bc1ffb3fec483cc6ef3aa7&units=metric&lang=ru"
        );
        const result = res.data.city;
        setWeatherData(result);

        const weatherList = res.data.list;
        let splitWeatherByDay: IWeatherList[][] = [];
        let currentDay: number = 0;

        weatherList.forEach((item: IWeatherList) => {
          const date = new Date(item.dt_txt);
          const day = date.getDate();

          if (day !== currentDay) {
            splitWeatherByDay.push([]);
            currentDay = day;
          }

          splitWeatherByDay[splitWeatherByDay.length - 1].push(item);
        });
        setWeather(splitWeatherByDay);
      } catch (err) {
        console.log(err);
      }
    };

    getWeather();
  }, []);

  return (
    <div className="App">
      <div className="Main-container">
        <CityTitle weatherData={weatherData} />
        {weather.map((item, index) => {
          return <DayWeather key={index} weather={item} />;
        })}
      </div>
    </div>
  );
};

export default App;
