import React, { Component } from "react";
import { forgotPassword } from "../auth";

class ForgotPassword extends Component {
  state = {
    email: "",
    message: "",
    error: "",
  };

  forgotPasswordFunction = (e) => {
    e.preventDefault();
    this.setState({ message: "", error: "" });
    forgotPassword(this.state.email).then((data) => {
      if (data.error) {
        console.log(data.error);
        this.setState({ error: data.error });
      } else {
        console.log(data.message);
        this.setState({ message: data.message });
      }
    });
  };

  render() {
    const { message, error } = this.state;
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">비밀번호 찾기</h2>

        <div
          className="alert alert-danger"
          style={{ display: error ? "" : "none" }}
        >
          {error}
        </div>
        <div
          className="alert alert-danger"
          style={{ display: message ? "" : "none" }}
        >
          {message}
        </div>

        <form>
          <div className="form-group mt-5">
            <input
              type="email"
              className="form-control"
              placeholder="이메일을 적어주세요."
              value={this.state.email}
              name="email"
              onChange={(e) =>
                this.setState({
                  email: e.target.value,
                  message: "",
                  error: "",
                })
              }
              autoFocus
            />
          </div>
          <button
            onClick={this.forgotPasswordFunction}
            className="btn btn-raised btn-primary"
          >
            이메일 발송
          </button>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
