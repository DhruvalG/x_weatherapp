import { useEffect, useState } from "react";
import "../CSS/styles.css";
import axios from "axios";
import Card from "./Card";
const MainDisplay = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      if (city) {
        setLoading(true);
        axios
          .get(`https://api.weatherapi.com/v1/current.json`, {
            params: {
              key: "88830efaabac404c878175853242809",
              q: city,
            },
          })
          .then((response) => {
            setWeatherData(response.data);
          })
          .catch((error) => {
            console.error("Error fetchhing data");
            alert("Failed to fetch weather data");
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }, [city]);
  
    return (
      <div className="weather-display">
        {loading && <p>Loading data...</p>}
        {!loading && weatherData && (
          <div className="weather-cards">
            <Card
              title="Temperature"
              value={`${weatherData.current.temp_c}°C`}
            />
            <Card
              title="Humidity"
              value={`${weatherData.current.humidity}%`}
            />
            <Card
              title="Condition"
              value={`${weatherData.current.condition.text}`}
            />
            <Card
              title="Wind Speed"
              value={`${weatherData.current.wind_kph} kph`}
            />
          </div>
        )}
      </div>
    );
  };
export default MainDisplay;