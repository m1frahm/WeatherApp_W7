# Weather Forecast app

> This app is a fullstack app build using React Frontend and Express Backend with real connection to the API openweather

## Quick Guide

First, you need to get an API_KEY from [OpenWeatherMap](https://openweathermap.org/current)

```bash
git clone https://github.com/Yosolita1978/HardCodeDataWeatherApi.git <NAMEOFYOURFOLDER>
```

move inside the directory

```bash
cd <NAMEOFYOURFOLDER>
```

next move into the server and install dependencies

```bash
cd server
npm install
```

Inside the  `server` folder please create a `.env` file to store your API_KEY value. You can refer to the `.env-exmple` file to see how. 

Open another terminal then cd into the client, install dependencies

```bash
cd client
npm install
```
### To start servers
Return to the terminal with the server folder and run the command `npm run dev`. This will run both servers with concurrently package

![screenshot](https://github.com/Yosolita1978/screenshoots/blob/main/2023/H1/Screen%20Shot%202023-02-25%20at%206.56.57%20PM.png?raw=true)

Note:
Server runs on http://localhost:8085 and client on http://localhost:3000

### Resource
- [Official documentation on how to do a Built-in API call request by city name](https://openweathermap.org/current#name)
- [How to easily manipulate URL search parameters in JavaScript](https://felixgerschau.com/js-manipulate-url-search-params/)
- [How the frontend and backend work together for the weather project by Kimberly Dang](https://youtu.be/pCSHm0GrcSQ)

