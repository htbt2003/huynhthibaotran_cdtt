import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserServices from '../../services/UserServices';
import { connect } from "react-redux";
import { GetUser } from './Cart/actions';
import swal from 'sweetalert';
import axios from 'axios';

const Login = ({ GetUser, userd }) => {
  const navigator = useNavigate();
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function doLogin(event) {
    event.preventDefault();
    const user = {
      email: email,
      password: password
    }
    const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    console.log(userd)

  axios.get('http://huynhthibaotran_backend_cdtt.test/sanctum/csrf-cookie')
    .then(function (res) {
      UserServices.login(user)
      .then(function (result) {
        if (result.status == true) {
          localStorage.setItem('auth_token', result.token);
          localStorage.setItem('auth', result.user.roles);
          GetUser(result.user);
          swal("Success", result.message, "success");
          if (result.user.roles === 'admin') {
            navigator("/admin", { replace: true })
          }
          else {
            navigator("/", { replace: true })
          }
        }
        else {
          swal("Warning", result.message, "warning");
        }
      });
    });
  }

return (
  <div>
    <div className="d-flex align-items-center auth px-0 mt-5">
      <div className="row w-100 mx-0">
        <div className="col-lg-4 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5">
            <div className="brand-logo">
              {/* <img src={require("assets\logo.svg")} alt="logo" /> */}
            </div>
            <h4>Hello! let's get started</h4>
            <h6 className="font-weight-light">Sign in to continue.</h6>
            <form className="pt-3" onSubmit={doLogin}>
              <div className="form-group">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="mt-3">
                <button type="submit" className=" btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN IN</button>
              </div>
              <div className="my-2 d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <label className="form-check-label text-muted">
                    <input type="checkbox" className="form-check-input" style={{ width: 17, margin: " -13px -20px" }} />
                    <i className="input-helper"></i>
                    Keep me signed in
                  </label>
                </div>
                <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Forgot password?</a>
              </div>
              <div className="mb-2">
                <button type="button" className="btn-block btn-facebook auth-form-btn">
                  <i className="mdi mdi-facebook mr-2"></i><span style={{ marginLeft: 20 }}>Connect using facebook</span>
                </button>
              </div>
              <div className="text-center mt-4 font-weight-light">
                Don't have an account? <Link to="/user-pages/register" className="text-primary">Create</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

);
}

const mapStateToProps = state => {
  return {
    userd: state._todoUser.user,
  }
}
export default connect(mapStateToProps, { GetUser })(Login);
