import React from "react";
import "./App.css";

function Game(props) {
	return (
		<div>
			<h1>This is the game and you chose {props.match.params.CharacterID}</h1>
		</div>
	);
}

export default Game;
