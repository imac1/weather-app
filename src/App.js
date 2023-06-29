import React, { useState } from "react";
import Titles from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";
import "./App.css";

const API_KEY = "2ee38c0583424ce1bba180514232906";

function App() {
	const [state, setState] = useState({
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		icon: undefined,
		error: undefined,
	});

	const getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const response = await fetch(
			// `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
			`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${'London'}&days=1&aqi=no&alerts=no`
		);
		const data = await response.json();
		if (city && country) {
			setState({
				temperature: data.current.temp_f,
				city: data.location.name,
				country: data.location.country,
				humidity: data.humidity,
				description: data.current.condition.text,
				icon: data.current.condition.icon,
				error: "",
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
			});
		}
		console.log({ data });
	};
	return (
		<div className="App">
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
