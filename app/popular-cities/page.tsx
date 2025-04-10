import { getWeatherByCoordinates } from "@/actions/getWeatherByCoordinates";
import { weatherCodes } from "../constants";
import WeatherCard from "@/components/WeatherCard";

// export const dynamic = "force-dynamic";

export const metadata = {
  title: "The Weather in Popular Cities | WeatherApp",
  description: "The Weather in Popular Cities",
  keywords: "weather, search, city, weather app",
};

const cities = [
  { id: "kyiv", name: "Kyiv", lat: 50.4547, lon: 30.5238 },
  { id: "new-york", name: "New-York", lat: 40.7128, lon: -74.006 },
  { id: "tokyo", name: "Tokio", lat: 35.682839, lon: 139.759455 },
  { id: "london", name: "London", lat: 51.5074, lon: -0.1278 },
  { id: "paris", name: "Paris", lat: 48.8534, lon: 2.3488 },
  { id: "melbourne", name: "Melbourne", lat: -37.814, lon: 144.9633 },
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

function getWeatherImage(weatherCode: number): string {
  const weather = weatherCodes.find((w) => w.codes.includes(weatherCode));
  return weather ? weather.img : "/weather-images/default.webp";
}

function getCurrentWeather(weatherCode: number): string {
  const weather = weatherCodes.find((w) => w.codes.includes(weatherCode));
  return weather ? weather.name : "No Data";
}

export default async function PopularCitiesPage() {
  const weatherData = await fetchWeather();
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-8 flex justify-center">
        Weather in popular cities
      </h1>
      <ul className="grid grid-cols-3 gap-4">
        {Object.entries(weatherData).map(([cityId, weather]: [string, any]) => {
          const city = cities.find((c) => c.id === cityId);
          const weatherImage = getWeatherImage(weather.current.weather_code);
          const weatherName = getCurrentWeather(weather.current.weather_code);
          return (
            <li key={cityId}>
              <WeatherCard
                weatherImage={weatherImage}
                cityName={city?.name || ""}
                weatherCurrentTime={weather.current.time}
                temperature={weather.current.temperature_2m}
                temperatureUnits={weather.current_units.temperature_2m}
                wind={weather.current.wind_speed_10m}
                windUnits={weather.current_units.wind_speed_10m}
                humidity={weather.current.relative_humidity_2m}
                humidityUnits={weather.current_units.relative_humidity_2m}
                weatherName={weatherName}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}