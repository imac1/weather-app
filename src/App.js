import React, { useState, useEffect } from "react";
import Titles from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";
import "./App.css";

const API_KEY = "2ee38c0583424ce1bba180514232906";
const PEXELS_API_KEY = "4uNPZ88uWvlaTZPdEGnSsfZ8MAQ2e6pF6WBXTDyb4OhqPKv1URhalykI";

function App() {
  const [state, setState] = useState({
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined,
    backgroundImage: undefined,
  });

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      if (state.city) {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${state.city}&per_page=1`,
          {
            headers: {
              Authorization: PEXELS_API_KEY,
            },
          }
        );
        const data = await response.json();
        if (data.photos && data.photos.length > 0) {
          const photo = data.photos[0];
          setState((prevState) => ({
            ...prevState,
            backgroundImage: photo.src.large,
          }));
        }
      }
    };

    fetchBackgroundImage();
  }, [state.city]);

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city},${country}&days=1&aqi=no&alerts=no`
    );
    const data = await response.json();
    if (city && country) {
      setState({
        temperature: data.current.temp_f,
        city: data.location.name,
        country: data.location.country,
        humidity: data.current.humidity,
        description: data.current.condition.text,
        icon: data.current.condition.icon,
        error: "",
        backgroundImage: state.backgroundImage,
      });
    } else {
      setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: "Please enter the values.",
        backgroundImage: state.backgroundImage,
      });
    }
    console.log({ data });
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: state.backgroundImage
          ? `url(${state.backgroundImage})`
          : "none",
      }}
    >
      <div className="main">
        <div className="titleContainer">
          <Titles />
        </div>
        <div className="formContainer">
          <Form getWeather={getWeather} />
          <Weather
            city={state.city}
            country={state.country}
            temperature={state.temperature}
            humidity={state.humidity}
            description={state.description}
            icon={state.icon}
            error={state.error}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
