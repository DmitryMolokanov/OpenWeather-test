import { FC } from "react";
import { IWeatherCity } from "../../types/weather";
import "./cityTitle.scss";

interface CityTitleProps {
  weatherData: IWeatherCity;
}

const CityTitle: FC<CityTitleProps> = ({ weatherData }) => {
  return (
    <div className="CityTitle">
      <h1>{weatherData ? weatherData?.name : null}</h1>
    </div>
  );
};

export default CityTitle;
