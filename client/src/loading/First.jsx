import React, { Component } from "react";
import styles from "./first.module.css";
import video from "../videos/gogo.mp4";
import { Redirect, Link } from "react-router-dom";

class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5, // initialState 5초
    };
    this.counter = this.counter.bind(this);
    this.timer = this.timer.bind(this);
  }

  // 1초마다 callback을 실행시키는 함수
  counter = () => setTimeout(this.timer, 1000);

  // 실제로 state.count를 -1 시키는 함수
  timer = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <video muted autoPlay className={styles.first}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default First;
