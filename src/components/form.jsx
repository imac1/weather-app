import React from "react";

const Form = (props) => (
	<form onSubmit={props.getWeather}  >
		<input type="text" name="city" placeholder="City..." />
		<input type="text" name="country" placeholder="Country..."/>
		<button class="bg-green-500 rounded-md shadow-lg">Weather</button>
	</form>
);

export default Form;