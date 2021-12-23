import React from "react";
import { Img } from "../components/img/imgs";
import { dogApi } from "../components/api/api";
import "./mainPage.scss";
import { Votes } from "../components/vote/votes";
import { Counter } from "../components/counter/counter";

export class MainPage extends React.Component {
  state = {
    url: "",
    likeCounter: 0,
    dislikeCounter: 0,
  };

  generateImg = async () => {
    const url = await dogApi.dogApiData();
    this.setState({ url });
    console.log(url);
  };

  componentDidMount() {
    this.generateImg();
  }

  addingCounter = (status) => {
    if (status === "Like") {
      this.setState({ likeCounter: this.state.likeCounter + 1 });
      // console.log("likeCounter", this.state.likeCounter);
    } else {
      this.setState({ dislikeCounter: this.state.dislikeCounter + 1 });
      // console.log("dislikeCounter", this.state.dislikeCounter);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <Counter
            likeCounter={this.state.likeCounter}
            dislikeCounter={this.state.dislikeCounter}
          />
        </div>
        <div className="wrapper">
          <Img url={this.state.url} />
        </div>
        <div className="wrapper">
          <Votes
            generateImg={this.generateImg}
            addingCounter={this.addingCounter}
          />
        </div>
      </div>
    );
  }
}
