interface WeatherCardProps {
  weatherImage: string;
  cityName: string;
  weatherCurrentTime: string;
  temperature: number;
  temperatureUnits: string;
  wind: number;
  windUnits: string;
  humidity: number;
  humidityUnits: string;
  weatherName: string;
}

export default function WeatherCard({
  weatherImage,
  cityName,
  weatherCurrentTime,
  temperature,
  temperatureUnits,
  wind,
  windUnits,
  humidity,
  humidityUnits,
  weatherName,
}: WeatherCardProps) {
  return (
    <div className="p-2 border-[2px] rounded-xl border-[#e98074] flex gap-2">
      <img
        src={weatherImage}
        alt={cityName + " weather"}
        width={200}
        height={200}
        className="rounded-sm"
      />
      <div className="flex flex-col justify-between w-full">
        <h2 className="text-2xl font-medium text-[#6f6f6e]">{cityName}</h2>
        <div className="grid grid-cols-2 justify-items-center gap-1 text-xl font-medium text-[#111]">
          <p className="flex gap-1">
            <img src="/clock.svg" alt="" width={20} />
            {weatherCurrentTime.split("T")[1]}
          </p>
          <p className="flex gap-1">
            <img src="/temperature.svg" alt="" width={12} />
            {temperature}
            {temperatureUnits}
          </p>
          <p className="flex gap-1">
            <img src="/wind.svg" alt="" width={15} />
            {wind}
            {windUnits}
          </p>
          <p className="flex gap-1">
            <img src="/humidity.svg" alt="" width={20} />
            {humidity}
            {humidityUnits}
          </p>
        </div>
        <h3 className="text-2xl font-medium text-[#6f6f6e]">{weatherName}</h3>
      </div>
    </div>
  );
}