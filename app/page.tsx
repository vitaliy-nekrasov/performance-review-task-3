import { getWeatherByCoordinates } from "../actions/getWeatherByCoordinates";

const cities = [
  { id: "london", name: "London", lat: 51.5074, lon: -0.1278 },
  { id: "new-york", name: "New-York", lat: 40.7128, lon: -74.006 },
  { id: "tokyo", name: "Tokio", lat: 35.682839, lon: 139.759455 },
];

async function fetchWeather() {
  const data: Record<string, any> = {};
  for (const city of cities) {
    const weather = await getWeatherByCoordinates(
      city.lat.toString(),
      city.lon.toString()
    );
    data[city.id] = weather;
  }
  return data;
}

export default async function Home() {
  const weatherData = await fetchWeather();
  return (
    <div>
      <h1>Weather in cities</h1>
      <ul>
        {Object.entries(weatherData).map(
          ([cityId, weather]: [string, Weather]) => {
            const city = cities.find((c) => c.id === cityId);
            return (
              <li key={cityId}>
                {city?.name}, {weather.current.time}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
