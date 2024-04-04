import { FC } from "react";
import { IWeatherList } from "../../types/weather";
import "./dayWeather.scss";

interface DayWeatherDiscriptionProps {
  item: IWeatherList;
}

const DayWeatherDiscription: FC<DayWeatherDiscriptionProps> = ({ item }) => {
  return (
    <div className="DayWeatherDiscription-container">
      <div className="DayWeatherDiscription-container-weather">
        <span>{item.weather[0].description}</span>
      </div>
      <div className="DayWeatherDiscription-container-humidity">
        <span>Влажность:</span>
        <span className="DayWeatherDiscription-container-humidity-data">
          {item.main.humidity}%
        </span>
      </div>
    </div>
  );
};

export default DayWeatherDiscription;
