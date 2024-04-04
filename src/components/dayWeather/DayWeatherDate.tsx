import { FC } from "react";
import getDay from "../../utils/getDay";
import getDate from "../../utils/getDate";
import { IWeatherList } from "../../types/weather";

interface DayWeatherDateProps {
  weather: IWeatherList[];
}

const DayWeatherDate: FC<DayWeatherDateProps> = ({ weather }) => {
  return (
    <div className="DayWeather-date">
      <span> {getDay(weather[0].dt_txt)}</span>
      <span>{getDate(weather[0].dt_txt)}</span>
    </div>
  );
};

export default DayWeatherDate;
