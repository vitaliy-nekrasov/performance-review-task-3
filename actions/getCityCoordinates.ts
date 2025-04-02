export async function getCityCoordinates(city: string) {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5&language=en`
  );
  const data = await res.json();
    
  if (data.results.length === 0) throw new Error("City not found");
  const lat = data.results[0].latitude;
  const lon = data.results[0].longitude;
  
  return { lat, lon };
}