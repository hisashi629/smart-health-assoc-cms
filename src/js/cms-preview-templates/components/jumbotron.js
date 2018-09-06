import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {image, title} = this.props;
    return <h1><img src={ image } alt={ title } width="100%" height="auto" /></h1>;

  }
}
