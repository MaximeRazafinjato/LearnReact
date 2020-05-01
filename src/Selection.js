import React from "react";
import SelectionCard from "./components/Cards";
import Button from "@material-ui/core/Button";

class MediaCard extends React.Component {
	state = {
		choice: "null",
	};

	changeState(state) {
		this.setState({
			choice: state,
		});
	}

	render() {
		return (
			<div>
				<p style={{ "font-size": "30px" }}> Click to choose you starter</p>
				<SelectionCard
					name={"Carapuce"}
					url={
						"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
					}
				/>
				<SelectionCard
					name={"Salamèche"}
					url={
						"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
					}
				/>
				<SelectionCard
					name={"Bulbizarre"}
					url={
						"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
					}
				/>
				<br />
				<p>{confirmationMessage(this)}</p>
				{/* <p>Do you want to name it ?</p> 
				<Button variant="contained" color="primary" href="/Game">
					Play
				</Button> */}
			</div>
		);
	}
}

//function to confirm the choice
function confirmationMessage(props) {
	if (props.state.choice == "null") {
		return;
	}
	return (
		<div>
			<p style={{ "font-size": "30px" }}>
				Are you sure you want to play with {props.state.choice}
			</p>

			<Button
				variant="contained"
				color="primary"
				href={"/Game/" + props.state.choice}
			>
				Play
			</Button>
		</div>
	);
}

export default MediaCard;
