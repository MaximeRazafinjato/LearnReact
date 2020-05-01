import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
				<Card className="selectionCards">
					<CardActionArea onClick={() => this.changeState("Carapuce")}>
						<CardMedia
							component="img"
							alt="Carapuce"
							height="140"
							image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
							title="Carapuce"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								Carapuce
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Carapuce, Pokémon de type Eau
							</Typography>
						</CardContent>
					</CardActionArea>
					{/* <CardActions>
						<Button size="small" color="primary" style={{ margin: "auto" }} onClick={() => this.changeState("Carapuce")}>
							Choose
						</Button>
					</CardActions> */}
				</Card>
				<Card className="selectionCards">
					<CardActionArea onClick={() => this.changeState("Salamèche")}>
						<CardMedia
							component="img"
							alt="Salamèche"
							height="140"
							image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
							title="Salamèche"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								Salamèche
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Salamèche, Pokémon de type Feu
							</Typography>
						</CardContent>
					</CardActionArea>
					{/* <CardActions>
						<Button
							size="small"
							color="primary"
							onClick={() => this.changeState("Salamèche")}
							style={{ margin: "auto" }}
						>
							Choose
						</Button>
					</CardActions> */}
				</Card>
				<Card className="selectionCards">
					<CardActionArea onClick={() => this.changeState("Bulbizarre")}>
						<CardMedia
							component="img"
							alt="Bulbizarre"
							height="140"
							image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
							title="Bulbizarre"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								Bulbizarre
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Bulbizarre, Pokémon de type Plante
							</Typography>
						</CardContent>
					</CardActionArea>
					{/* <CardActions>
						<Button
							size="small"
							color="primary"
							onClick={() => this.changeState("Bulbizarre")}
							style={{ margin: "auto" }}
						>
							Choose
						</Button>
					</CardActions> */}
				</Card>

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
