import React from "react";

function Input(props) {
	return (
		<label htmlFor="name">
			{props.label}
			<input className="submissionfield" {...props} />
			<p>{props.errors[props.name]}</p>
		</label>
	);
}

export default Input;
