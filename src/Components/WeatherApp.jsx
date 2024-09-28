import { useState } from "react";
import "../CSS/styles.css";
import Search from "./Search";
import MainDisplay from "./MainDisplay";
export default function App() {
  const [city, setCity] = useState("");
  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };
  return (
    <div className="app">
      <Search onSearch={handleSearch} />
      <MainDisplay city={city} />
    </div>
  );
}
