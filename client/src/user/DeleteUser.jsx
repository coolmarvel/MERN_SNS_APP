import React, { Component } from "react";
import { isAuthenticated } from "../auth/index";
import { remove } from "./apiUser";
import { signout } from "../auth/index";
import { Redirect } from "react-router-dom";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class DeleteUser extends Component {
  state = {
    redirect: false,
  };

  deleteAccount = () => {
    const token = isAuthenticated().token;
    const userId = this.props.userId;
    remove(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        signout(() => console.log("User is deleted"));
        this.setState({ redirect: true });
      }
    });
  };

  deleteConfirmed = () => {
    confirmAlert({
      title: "회원탈퇴",
      message:
        "회원탈퇴하게되면 3년간 재수가없을것이며 이편지는 영국에서부터 시작했음",
      buttons: [
        {
          label: "응안믿어",
          onClick: () => this.deleteAccount(),
        },
        {
          label: "안할게",
        },
      ],
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/"></Redirect>;
    }
    return (
      <button
        onClick={this.deleteConfirmed}
        className="btn btn-sm btn-raised btn-dark"
      >
        회원탈퇴
      </button>
    );
  }
}

export default DeleteUser;
