import "./App.css";
import { useState } from "react";
import WeatherForm from "./components/weatherForm";
import WeatherCard from "./components/weatherCard";

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);

  //A function to do the get request and set the state from the hard code data
  const loadCity = (weatherDataForCity) => {
    const params = new URLSearchParams({ cityName: weatherDataForCity }); // replicates what happens to the url in postman where ?= comes depending on your key, which in this is cityName
    //console.log(params);
    // fetch(`http://localhost:8085/api/weather?${params}`)
    fetch(`http://localhost:8085/weatherhc?${params}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result); // prints out in browser console
        setCity(weatherDataForCity);
        setResult(result);
      });
  };

  const handleSubmit = (weatherDataForCity) => {
    loadCity(weatherDataForCity);
  };

  return (
    <div className="App">
      <WeatherForm cityInParent={city} handleSubmit={handleSubmit} />
      {!result ? (
        <p>Please use the Form to see Real Data</p>
      ) : (
        <WeatherCard data={result} /> // pay attention to this line this links back to WC
      )}
    </div>
  );
}

export default App;
