import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input.js";
import * as Yup from "yup";
import "./components.css";
import Pizza from "./Pizza.jpg";

function PizzaForm() {
	const FormP = styled.p`
		font-family: imperial;
		font-size: 2rem;
		margin-top: 20px;
		margin-bottom: -20px;
	`;
	const defaultState = {
		name: "",
		size: "",
		cheese: false,
		bacon: false,
		whiteSauce: false,
		tomatoe: false,
		pineapple: false,
		basil: false,
		specialInstructions: "",
	};
	const [formState, setFormState] = useState(defaultState);
	const [errors, setErrors] = useState({
		name: "",
	});
	const [orderState, setOrder] = useState([]);
	const onSubmit = (event) => {
		event.preventDefault();
		const order = setOrder({
			...orderState,
			formState,
		});
	};
	const formSchema = Yup.object().shape({
		name: Yup.string()
			.min(2, "must include more then 2 characters")
			.required("must include at least 2 characters"),
		size: Yup.array(),
		Cheese: Yup.boolean(),
		Bacon: Yup.boolean(),
		WhiteSauce: Yup.boolean(),
		Tomatoe: Yup.boolean(),
		Pineapple: Yup.boolean(),
		Basil: Yup.boolean(),
		specialInstructions: Yup.string(),
	});
	const validateChange = (e) => {
		e.persist();
		Yup.reach(formSchema, e.target.name)
			.validate(e.target.value)
			.then((valid) =>
				setErrors({
					...errors,
					[e.target.name]: "",
				})
			)
			.catch((error) =>
				setErrors({
					...errors,
					[e.target.name]: error.errors[0],
				})
			);
	};
	const changeHandler = (e) => {
		const value =
			e.target.type === "checkbox" ? e.target.checked : e.target.value;
		setFormState({
			...formState,
			[e.target.name]: value,
		});
		validateChange(e);
	};

	return (
		<div className="form" styles={{ backgroundImage: `url(${Pizza})` }}>
			<h1>Order a pizza Below.</h1>
			<form onSubmit={onSubmit}>
				<label className="input">
					<FormP>Name</FormP>
					<br />
					<br />
					<Input
						name="name"
						type="text"
						placeholder="Your Name"
						onChange={changeHandler}
						value={formState.name}
						errors={errors}
					/>
				</label>
				<br />
				<br />
				<label>
					<FormP>Select Size</FormP>
					<br />
					<br />
					<select
						id="sizeInput"
						name="size"
						value={formState.size}
						onChange={changeHandler}
						errors={errors}
						label="Size"
					>
						<option value="Select Size">Select Size</option>
						<option value="Small">Small</option>
						<option value="Medium">Medium</option>
						<option value="Large">Large</option>
						<option value="Jumbo">Jumbo</option>
					</select>
				</label>
				<br />
				<br />
				<label className="input" htmlFor="terms">
					<FormP>Select Topings</FormP>
					<br />
					<br />
					CHEESE
					<input
						name="Cheese"
						type="checkbox"
						onChange={changeHandler}
						checked={formState.cheese}
						errors={errors}
						value="yes"
					/>
					BACON
					<input
						name="Bacon"
						type="checkbox"
						onChange={changeHandler}
						checked={formState.bacon}
						errors={errors}
					/>
					WHITESAUCE
					<input
						name="WhiteSauce"
						type="checkbox"
						onChange={changeHandler}
						checked={formState.whiteSauce}
						errors={errors}
					/>
					TOMATO
					<input
						name="Tomatoe"
						type="checkbox"
						onChange={changeHandler}
						checked={formState.tomatoe}
						errors={errors}
					/>
					PINEAPPLE
					<input
						name="Pineapple"
						type="checkbox"
						onChange={changeHandler}
						checked={formState.pineapple}
						errors={errors}
					/>
					BASIL
					<input
						name="Basil"
						type="checkbox"
						onChange={changeHandler}
						checked={formState.basil}
						errors={errors}
					/>
				</label>
				<br />
				<br />
				<label className="input">
					<FormP>Special Instructions</FormP>
					<br />
					<br />
					<Input
						name="specialInstructions"
						type="text"
						placeholder="Special Instructions"
						onChange={changeHandler}
						value={formState.specialInstructions}
						errors={errors}
					/>
				</label>
				<button className="button">ADD TO ORDER</button>
			</form>
			<pre>Your Order:{JSON.stringify(orderState)}</pre>
		</div>
	);
}

export default PizzaForm;
