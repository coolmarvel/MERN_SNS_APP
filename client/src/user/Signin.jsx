import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { signin, authenticate, isAuthenticated } from '../auth';
import SocialLogin from './SocialLogin';

import Loading from '../loading/Loading';

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
      redirectToReferer: false,
      loading: false,
      recaptcha: false,
    };
  }

  recaptchaHandler = (e) => {
    this.setState({ error: '' });
    let userDay = e.target.value.toLowerCase();
    let dayCount;

    if (userDay === '일요일') {
      dayCount = 0;
    } else if (userDay === '월요일') {
      dayCount = 1;
    } else if (userDay === '화요일') {
      dayCount = 2;
    } else if (userDay === '수요일') {
      dayCount = 3;
    } else if (userDay === '목요일') {
      dayCount = 4;
    } else if (userDay === '금요일') {
      dayCount = 5;
    } else if (userDay === '토요일') {
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
      error: '',
      [e.target.name]: e.target.value,
    });
  };

  clickSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { email, password } = this.state;
    const user = { email, password };
    // console.log(user);
    if (this.state.recaptcha) {
      signin(user).then((data) => {
        if (data.error) {
          this.setState({ error: data.error, loading: false });
        } else {
          // authenticate
          authenticate(data, () => {
            this.setState({ redirectToReferer: true });
          });
        }
      });
    } else {
      this.setState({
        loading: false,
        error: 'What day is today? Please write a correct answer!',
      });
    }
  };

  signinForm = (email, password, loading, recaptcha) => (
    <form style={{ display: loading ? 'none' : '' }}>
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
          {recaptcha ? '오우 정답!' : '오늘은 무슨요일입니까?'}
        </label>
        <input
          onChange={this.recaptchaHandler}
          type="text"
          className="form-control"
        />
      </div>

      <button onClick={this.clickSubmit} className="btn btn-raised btn-primary">
        로그인
      </button>
    </form>
  );

  render() {
    const { email, password, error, redirectToReferer, loading, recaptcha } =
      this.state;
    if (redirectToReferer || isAuthenticated()) {
      return <Redirect to="/main" />;
    }
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">로그인</h2>
        <SocialLogin />
        <hr />
        <p className="text-center text-muted" style={{ fontSize: '24px' }}>
          상세 정보
        </p>
        <hr />
        <hr />

        <div
          className="alert alert-danger"
          style={{ display: error ? '' : 'none' }}
        >
          {error}
        </div>
        {this.signinForm(email, password, loading, recaptcha)}

        {loading ? <Loading /> : ''}
        <p>
          <Link to="/forgot-password" className="btn btn-raised btn-danger">
            {' '}
            비밀번호 찾기
          </Link>
        </p>
      </div>
    );
  }
}

export default Signin;
