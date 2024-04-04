import { IWeatherList } from "../../types/weather";
import { FC } from "react";
import "./dayWeather.scss";
import DayWeatherContainer from "./DayWeatherContainer";
import DayWeatherDate from "./DayWeatherDate";

interface DayWeatherProps {
  weather: IWeatherList[];
}

const DayWeather: FC<DayWeatherProps> = ({ weather }) => {
  return (
    <div className="DayWeather">
      {weather ? (
        <div>
          <DayWeatherDate weather={weather} />
          <DayWeatherContainer weather={weather} />
        </div>
      ) : null}
    </div>
  );
};

export default DayWeather;
