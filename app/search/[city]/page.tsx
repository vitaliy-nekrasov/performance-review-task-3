import { getWeatherByCoordinates } from "@/actions/getWeatherByCoordinates";
import { weatherCodes } from "@/app/constants";
import { getCityCoordinates } from "@/actions/getCityCoordinates";

function getWeatherImage(weatherCode: number): string {
  const weather = weatherCodes.find((w) => w.codes.includes(weatherCode));
  return weather ? weather.img : "/weather-images/default.webp";
}

function getCurrentWeather(weatherCode: number): string {
  const weather = weatherCodes.find((w) => w.codes.includes(weatherCode));
  return weather ? weather.name : "No Data";
}

export default async function CityWeatherPage({ params }: { params: { city: string } }) {
  const { city } = params;
  try {
    const { lat, lon } = await getCityCoordinates(city);
    const weather = await getWeatherByCoordinates(lat.toString(), lon.toString());

    const weatherImage = getWeatherImage(weather.current.weather_code);
    const weatherName = getCurrentWeather(weather.current.weather_code);

    return (
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl font-semibold mb-6">Weather in {city}</h1>
        <div className="p-4 border-[2px] rounded-xl border-[#e98074] flex gap-4">
          <img
            src={weatherImage}
            alt={`${city} weather`}
            width={200}
            height={200}
            className="rounded-sm"
          />
          <div className="flex flex-col justify-between w-full">
            <h2 className="text-2xl font-medium text-[#6f6f6e]">{weatherName}</h2>
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
          </div>
        </div>
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
