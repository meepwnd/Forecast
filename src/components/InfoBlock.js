import React from "react";
import PropTypes from "prop-types";
import { windDirection } from "../api/degToCompass";
import moment from "moment";

const InfoBlock = ({ data }) => (
  <div className="infoblock">
    <p className="date">{moment.unix(data.dt).format("DD MMMM ")}</p>
    <p>{Math.round(data.main.temp)} &deg;C</p>
    <img
      className="clouds"
      src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
      alt=""
    />
    <p>
      min: {Math.round(data.main.temp_min)} max:{" "}
      {Math.round(data.main.temp_max)}
    </p>
    <p>Humidity: {data.main.humidity} %</p>
    <p>
      Wind: {data.wind.speed} mph {windDirection(data.wind.deg)}
    </p>
  </div>
);

InfoBlock.propTypes = {
  data: PropTypes.object
};

export default InfoBlock;
