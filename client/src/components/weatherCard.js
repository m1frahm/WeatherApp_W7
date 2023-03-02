const WeatherCard = (props) => {
  // <div className="weather-card">
  //     <div className="result">
  //         <p>City: <span className="data">
  //             {props.data.weather[0].name}, {props.data.weather[0].sys.country}
  //         </span>
  //         </p>
  //         <p>Description: <span className="data">
  //         {props.data.weather[0].description}
  //       </span>
  //     </p>
  //     <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png`} alt={"Icon from Open Weather Api"}/>
  //     <p>
  //       Temperature: <span className="data">
  //         {props.data.weather[0].main.temp} <sup>o</sup>C
  //       </span>
  //     </p>
  //     <p>
  //       Feels Like: <span className="data">
  //         {props.data.weather[0].main.feels_like} <sup>o</sup>C
  //       </span>
  //     </p>

  //     </div>

  // </div>

  return (
    <div className="weather-card">
      <div className="result">
        <p>
          City:{" "}
          <span className="data">
            {props.data.weather[0].name}, {props.data.weather[0].sys.country}
          </span>
        </p>
        <p>
          Description:{" "}
          <span className="data">{props.data.weather[0].description}</span>
        </p>
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png`}
          alt={"Icon from Open Weather Api"}
        />
        <p>
          Temperature:{" "}
          <span className="data">
            {props.data.weather[0].main.temp} <sup>o</sup>C
          </span>
        </p>
        <p>
          Temperature Minimum:{" "}
          <span className="data">
            {props.data.weather[0].main.temp_min} <sup>o</sup>C
          </span>
        </p>
        <p></p>
        <p>
          Feels Like:{" "}
          <span className="data">
            {props.data.weather[0].main.feels_like} <sup>o</sup>C
          </span>
        </p>
        <p>
          Humidity:{" "}
          <span className="data">
            {props.data.weather[0].main.humidity} <sup>o</sup>C
          </span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
