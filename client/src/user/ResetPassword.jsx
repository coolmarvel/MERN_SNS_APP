import React, { Component } from "react";
import { resetPassword } from "../auth";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: "",
      message: "",
      error: "",
    };
  }

  resetPassword = (e) => {
    e.preventDefault();
    this.setState({ message: "", error: "" });

    resetPassword({
      newPassword: this.state.newPassword,
      resetPasswordLink: this.props.match.params.resetPasswordToken,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
        this.setState({ error: data.error });
      } else {
        console.log(data.message);
        this.setState({ message: data.message, newPassword: "" });
      }
    });
  };

  render() {
    const { message, error } = this.state;
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">비밀번호를 변경해주세요</h2>

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
              type="password"
              className="form-control"
              placeholder="새로운 비밀번호 입력"
              value={this.state.newPassword}
              name="newPassword"
              onChange={(e) =>
                this.setState({
                  newPassword: e.target.value,
                  message: "",
                  error: "",
                })
              }
              autoFocus
            />
          </div>
          <button
            onClick={this.resetPassword}
            className="btn btn-raised btn-primary"
          >
            비밀번호 변경하기
          </button>
        </form>
      </div>
    );
  }
}

export default ResetPassword;
