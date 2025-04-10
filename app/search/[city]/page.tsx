import { getWeatherByCoordinates } from "@/actions/getWeatherByCoordinates";
import { weatherCodes } from "@/app/constants";
import { getCityCoordinates } from "@/actions/getCityCoordinates";
import WeatherCard from "@/components/WeatherCard";

export const metadata = {
  title: "City weather page | WeatherApp",
  description: "App for a city to get its weather",
  keywords: "weather, search, city, weather app",
};

interface CityWeatherPageProps {
  params: Promise<{
    city: string;
  }>;
}

function getWeatherImage(weatherCode: number): string {
  const weather = weatherCodes.find((w) => w.codes.includes(weatherCode));
  return weather ? weather.img : "/weather-images/default.webp";
}

function getCurrentWeather(weatherCode: number): string {
  const weather = weatherCodes.find((w) => w.codes.includes(weatherCode));
  return weather ? weather.name : "No Data";
}

export default async function CityWeatherPage({
  params,
}: CityWeatherPageProps) {
  const { city } = await params;
  try {
    const { lat, lon } = await getCityCoordinates(city);
    const weather = await getWeatherByCoordinates(
      lat.toString(),
      lon.toString()
    );

    const weatherImage = getWeatherImage(weather.current.weather_code);
    const weatherName = getCurrentWeather(weather.current.weather_code);

    return (
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl font-semibold mb-6">
          Weather in {city.charAt(0).toUpperCase() + city.slice(1)}
        </h1>
        <WeatherCard
          weatherImage={weatherImage}
          cityName={city.charAt(0).toUpperCase() + city.slice(1) || ""}
          weatherCurrentTime={weather.current.time}
          temperature={weather.current.temperature_2m}
          temperatureUnits={weather.current_units.temperature_2m}
          wind={weather.current.wind_speed_10m}
          windUnits={weather.current_units.wind_speed_10m}
          humidity={weather.current.relative_humidity_2m}
          humidityUnits={weather.current_units.relative_humidity_2m}
          weatherName={weatherName}
        />
      </div>
    );
  } catch (error) {
    return (
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl font-semibold mb-6">City not found</h1>
      </div>
    );
  }
}

// if we know the cities in advance, we can use static generation
export function generateStaticParams() {
  return [{ city: "monaco" }, { city: "london" }];
}