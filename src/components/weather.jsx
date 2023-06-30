import React from "react";

const Weather = (props) => (
	<div className="info"  class='flex flex-col p-4 border '>
		{props.city && props.country && (
			<p className="key">
				Location:
				<span className="value">

					{props.city}, {props.country}
				</span>
			</p>
		)}
		{props.temperature && (
			<p className="key">
				Temperature:
				<span className="value"> {props.temperature} &#8451;</span>
			</p>
		)}
		{props.humidity && (
			<p className="key">
				Humidity:
				<span className="value"> {props.humidity} %</span>
			</p>
		)}
		{props.description && (
			<p className="key">
				Conditions:
				<span className="value"> {props.description}</span>
			</p>
		)}
		{props.icon &&(
			<img className="icon" src ={`${props.icon}`} alt="" class='w-12 h-12 '/>
		)}
		{props.error && <p className="error">{props.error}</p>}
	</div>
);

export default Weather;
