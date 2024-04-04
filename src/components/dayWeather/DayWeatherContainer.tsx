import { FC } from "react";
import DayWeatherTemp from "./DayWeatherTemp";
import DayWeatherDiscription from "./DayWeatherDiscription";
import { IWeatherList } from "../../types/weather";
import DayWeatherTime from "./DayWeatherTime";

interface DayWeatherContainerProps {
  weather: IWeatherList[];
}

const DayWeatherContainer: FC<DayWeatherContainerProps> = ({ weather }) => {
  return (
    <div
      className="DayWeather-container"
      style={weather.length < 7 ? { justifyContent: "flex-end" } : null}
    >
      {weather.map((item) => {
        return (
          <div
            key={item.dt}
            className="DayWeather-container-card"
            style={weather.length < 7 ? { width: "15%" } : null}
          >
            <DayWeatherTemp item={item} />
            <DayWeatherTime time={item.dt_txt} />
            <DayWeatherDiscription item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default DayWeatherContainer;
