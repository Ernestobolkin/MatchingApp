import React from "react";

import "./img.scss";

export class Img extends React.Component {
  renderImg = () => {
    return <img src={this.props.url} alt="Random Img" />;
  };

  render() {
    return <div className="img-container">{this.renderImg()}</div>;
  }
}
