import React from "react";
import Game from "./Game.js";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Selection from "./Selection";

function Router() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<div>
							<img
								src="https://clipartart.com/images/logo-pokemon-clipart.jpg"
								className="App-logo"
								alt="logo"
							/>
							<br />
							<Button variant="contained" color="primary" href="/Selection">
								Play
							</Button>
						</div>
					</Route>
					<Route exact path="/Selection">
						<Selection />
					</Route>
					<Route exact path="/Game/:CharacterID" component={Game} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

//apres start, selection characters avec next
//jeu commence
export default Router;
