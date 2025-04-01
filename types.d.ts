interface Weather {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentWeatherUnits;
  current: CurrentWeather;
}

interface CurrentWeatherUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  is_day: string;
  wind_speed_10m: string;
  wind_direction_10m: string;
  precipitation: string;
  rain: string;
  showers: string;
  snowfall: string;
}

interface CurrentWeather {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  is_day: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  precipitation: number;
  rain: number;
  showers: number;
  snowfall: number;
}
