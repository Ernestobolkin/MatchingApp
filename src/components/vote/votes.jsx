import React from "react";
import "./vote.scss"

export class Votes extends React.Component {
  newImg = async (e) => {
    this.props.addingCounter(e.target.textContent);
    this.props.generateImg();
  };

  render() {
    return (
      <div className="voteContainer">
        <button onClick={(e) => this.newImg(e)}>Like</button>
        <button onClick={(e) => this.newImg(e)}>Dislike</button>
      </div>
    );
  }
}
