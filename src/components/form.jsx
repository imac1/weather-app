import React from "react";

const Form = (props) => (
	<form onSubmit={props.getWeather}>
		<input list="europe-cities" type="text" name="city" placeholder="City..." />
		<datalist id="europe-cities">
			<option>Berlin</option>
			<option>Paris</option>
			<option>Madrid</option>
			<option>London</option>
		</datalist>
		<input list="europe-countries" type="text" name="country" placeholder="Country..." />
		<datalist id="europe-countries">
			<option>Spain</option>
			<option>Germany</option>
			<option>United Kingdom</option>
			<option>France</option>
		</datalist>
		<button class="bg-green-500 rounded-md shadow-lg">Weather</button>
	</form>
);

export default Form;
