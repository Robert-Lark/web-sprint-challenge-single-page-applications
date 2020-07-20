import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import PizzaForm from "./components/Pizza";
import styled from "styled-components";

const App = () => {
  const NavBar = styled.div`
		display: flex;
		justify-content: space-around;
		font-size: 2rem;
		font-family: Impact, Charcoal, sans-serif;
		border: 2px solid black;
	`;
  const P = styled.p`
		color: red;
		text-align: center;
	`;
      return (
    <div>
      <header>
        <NavBar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <P>Home</P>
          </Link>
          <Link to="/About" style={{ textDecoration: "none" }}>
            <P>About</P>
          </Link>
          <Link to="/Javascript" style={{ textDecoration: "none" }}>
            <P>Ramen</P>
          </Link>
          <Link to="/CSS" style={{ textDecoration: "none" }}>
            <P>Chicken</P>
          </Link>
          <Link to="/Add" style={{ textDecoration: "none" }}>
            <P>Pizza</P>
          </Link>
        </NavBar>
      </header>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Pizza" component={PizzaForm}/>
      </Switch>
    </div>
  );
};
export default App;
