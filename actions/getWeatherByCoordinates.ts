export function getWeatherByCoordinates(
  latitude: string,
  longitude: string
): Promise<Weather> {
  return fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,wind_speed_10m,wind_direction_10m,weather_code,precipitation,rain,showers,snowfall&forecast_days=1&timezone=auto`,
    {cache: 'no-cache'}
  ).then((res) => res.json());
}