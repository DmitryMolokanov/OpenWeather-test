import { FC } from "react";
import getTime from "../../utils/getTime";

interface DayWeatherTimeProps {
  time: string;
}

const DayWeatherTime: FC<DayWeatherTimeProps> = ({ time }) => {
  return <div className="DayWeatherTime">{getTime(time)}</div>;
};

export default DayWeatherTime;
