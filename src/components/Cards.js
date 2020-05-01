import React from "react";
import "./App.css";


class Card extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }