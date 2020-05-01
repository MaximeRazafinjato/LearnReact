import React from "react";
import ReactDOM from "react-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

class SelectionCard extends React.Component {
	render() {
		return (
			<div>
				<Card className="selectionCards">
					<CardActionArea>
						<CardMedia
							component="img"
							alt={this.props.name}
							height="140"
							image={this.props.url}
							title={this.props.name}
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{this.props.name}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{this.props.name}, Pokémon de type
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
		);
	}
}
export default SelectionCard;

// "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
