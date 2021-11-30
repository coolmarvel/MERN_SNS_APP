import React, { Component } from "react";

import { signup } from "../auth";

import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import SocialLogin from "./SocialLogin";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      error: "",
      open: false,
      loading: false,
      recaptcha: false,
    };
  }

  recaptchaHandler = (e) => {
    this.setState({ error: "" });
    let userDay = e.target.value.toLowerCase();
    let dayCount;

    if (userDay === "일요일") {
      dayCount = 0;
    } else if (userDay === "월요일") {
      dayCount = 1;
    } else if (userDay === "화요일") {
      dayCount = 2;
    } else if (userDay === "수요일") {
      dayCount = 3;
    } else if (userDay === "목요일") {
      dayCount = 4;
    } else if (userDay === "금요일") {
      dayCount = 5;
    } else if (userDay === "토요일") {
      dayCount = 6;
    }

    if (dayCount === new Date().getDay()) {
      this.setState({ recaptcha: true });
      return true;
    } else {
      this.setState({
        recaptcha: false,
      });
      return false;
    }
  };

  handleChange = (e) => {
    this.setState({
      error: "",
      open: false,
      [e.target.name]: e.target.value,
    });
  };

  clickSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { name, email, password } = this.state;
    const user = { name, email, password };
    // console.log(user);
    if (this.state.recaptcha) {
      signup(user).then((data) => {
        if (data.error) {
          this.setState({ error: data.error, loading: false });
        } else {
          this.setState({
            name: "",
            email: "",
            password: "",
            error: "",
            open: true,
            loading: false,
          });
        }
      });
    } else {
      this.setState({
        loading: false,
        error: "오늘은 무슨 요일입니까?",
      });
    }
  };

  signupForm = (name, email, password, loading, recaptcha) => (
    <form style={{ display: loading ? "none" : "" }}>
      <div className="form-group">
        <label className="text-muted">이름</label>
        <input
          onChange={this.handleChange}
          name="name"
          type="text"
          className="form-control"
          value={name}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">이메일</label>
        <input
          onChange={this.handleChange}
          type="email"
          name="email"
          className="form-control"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">패스워드</label>
        <input
          onChange={this.handleChange}
          type="password"
          name="password"
          className="form-control"
          value={password}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">
          {recaptcha ? "정답입니다!" : "오늘은 무슨요일입니까?"}
        </label>
        <input
          onChange={this.recaptchaHandler}
          type="text"
          className="form-control"
        />
      </div>
      <button onClick={this.clickSubmit} className="btn btn-raised btn-primary">
        Submit
      </button>
    </form>
  );

  render() {
    const { name, email, password, error, open, loading, recaptcha } =
      this.state;
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">회원가입</h2>
        <SocialLogin for="signup" />
        <hr />
        <p className="text-center text-muted" style={{ fontSize: "24px" }}>
          OR
        </p>
        <hr />
        <hr />
        <div
          className="alert alert-danger"
          style={{ display: error ? "" : "none" }}
        >
          {error}
        </div>
        <div
          className="alert alert-info"
          style={{ display: open ? "" : "none" }}
        >
          회원가입이 완료되었습니다 로그인해주세요{" "}
          <Link to="/signin">로그인페이지</Link>.
        </div>
        {this.signupForm(name, email, password, loading, recaptcha)}
        {loading ? <Loading /> : ""}
      </div>
    );
  }
}

export default Signup;
