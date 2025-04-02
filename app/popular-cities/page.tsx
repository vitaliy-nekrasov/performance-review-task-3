import { getWeatherByCoordinates } from "@/actions/getWeatherByCoordinates";
import { weatherCodes } from "../constants";

// export const dynamic = "force-dynamic";

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
              <div className="p-2 border-[2px] rounded-xl border-[#e98074] flex gap-2">
                <img
                  src={weatherImage}
                  alt={city?.name + " weather"}
                  width={200}
                  height={200}
                  className="rounded-sm"
                />
                <div className="flex flex-col justify-between w-full">
                  <h2 className="text-2xl font-medium text-[#6f6f6e]">
                    {city?.name}
                  </h2>
                  <div className="grid grid-cols-2 justify-items-center gap-1 text-xl font-medium text-[#111]">
                    <p className="flex gap-1">
                      <img src="/clock.svg" alt="" width={20} />
                      {weather.current.time.split("T")[1]}
                    </p>
                    <p className="flex gap-1">
                      <img src="/temperature.svg" alt="" width={12} />
                      {weather.current.temperature_2m}
                      {weather.current_units.temperature_2m}
                    </p>
                    <p className="flex gap-1">
                      <img src="/wind.svg" alt="" width={15} />
                      {weather.current.wind_speed_10m}
                      {weather.current_units.wind_speed_10m}
                    </p>
                    <p className="flex gap-1">
                      <img src="/humidity.svg" alt="" width={20} />
                      {weather.current.relative_humidity_2m}
                      {weather.current_units.relative_humidity_2m}
                    </p>
                  </div>
                  <h3 className="text-2xl font-medium text-[#6f6f6e]">
                    {weatherName}
                  </h3>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}