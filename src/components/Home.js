import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


function Home() {
	const H1 = styled.h1`
		padding-top: 50px;
		font-size: 5rem;
		text-align: center;
	`;
	const Button = styled.button`
		border: 2px solid black;
		width: 50vw;
		margin-left: 25%;
	`;
	const P = styled.p`
		color: red;
		text-align: center;
	`;
	return (
		<div className="App">
			<H1>Lambda Eats</H1>
			<P>FOOD! Your Code Will Thank You For It</P>
			<header className="App-header">
				<H1>CLICK HERE TO ORDER FOOD</H1>
				<Link to="/Pizza" style={{ textDecoration: "none" }}>
					<Button>ORDER</Button>
				</Link>
			</header>
		</div>
	);
}

export default Home;
