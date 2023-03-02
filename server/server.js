const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dataWeather = require("./data");

const app = express();

const PORT = 8085; // 8085 is the port for backend
app.use(cors());
app.use(express.json());

//hard coding data inside server.js
const coord = {
  lon: -73.5387,
  lat: 41.0534,
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04d",
      base: "stations",
      main: {
        temp: 5.2,
        feels_like: 2.68,
        temp_min: 3.54,
        pressure: 1016,
        humidity: 65,
      },
      visibility: 10000,
      wind: {
        speed: 3.09,
        deg: 160,
      },
      clouds: {
        all: 75,
      },
      dt: 1677693199,
      sys: {
        type: 2,
        id: 2010292,
        country: "US",
        sunrise: 1677670142,
        sunset: 1677710664,
      },
      timezone: -18000,
      id: 4843564,
      name: "Stamford",
      cod: 200,
    },
  ],
};
// // creates an endpoint for the route/api
app.get("/", (req, res) => {
  res.json({ message: "Hello from My template ExpressJS using and API Key" });
});

// //copying example from last week with books.js
// app.get("/weatherhc", (req, res) => {
//   res.json(coord); //instead of line above, need to do res.json
//   //res.send("Hello"); // i think this line is not necessary
// });

// creates an endpoint for the route /api/weather // endpoint is the weather endpoint (this is the invoice)
app.get("/weatherhc", (req, res) => {
  const city = req.query.cityName; // cityName could be changed and is simply "q" key in postman
  //console.log(city);
  const apiKey = process.env.API_KEY;
  const params = new URLSearchParams({
    q: city,
    appid: apiKey,
    units: "Metric",
  });
  const url = `https://api.openweathermap.org/data/2.5/weather?${params}`; // we only need to use line 27 or 28 - both are same way of showing url
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
  //console.log(url);
  fetch(url) // this line fetches data from weather API (url we made above)
    .then((res) => res.json()) //comes back as a response in my server and then converts it to json
    .then((data) => {
      // this line returns the data back
      console.log(data);
      res.send({ data }); //use data and send back to react (client)
    })
    .catch((err) => {
      // .catch is a way to catch error (on a promise)
      console.log(err);
    });
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`BackEnd Server listening on ${PORT}`);
});
