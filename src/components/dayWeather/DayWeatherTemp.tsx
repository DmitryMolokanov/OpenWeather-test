import { FC } from "react";
import { IWeatherList } from "../../types/weather";
import "./dayWeather.scss";

interface DayWeatherTempProps {
  item: IWeatherList;
}

const DayWeatherTemp: FC<DayWeatherTempProps> = ({ item }) => {
  return (
    <div className="DayWeather-container-card-temp">
      <div>{Math.round(item.main.temp)}&deg;</div>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
          alt="weather-icon"
        />
      </div>
    </div>
  );
};

export default DayWeatherTemp;
