import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import loginPageImage from "../../images/9364675fb26a.svg";
import instagramLogo from "../../images/logoinsta.png";
import "./LoginPage.css";
import fb from "../../images/fb.png";
import appstore from "../../images/app.png";
import playstore from "../../images/play.png";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: true };
  }

  changeLogin = () => {
    if (this.state.isLogin === true) {
      this.setState({ isLogin: false });
    } else {
      this.setState({ isLogin: true });
    }
  };
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div className="loginpage_main">
            <div>
              <img src={loginPageImage} width="454px" />
            </div>
            <div>
              <div className="loginpage_rightcomponent">
                <img className="loginpage_logo" src={instagramLogo} />
                <div className="loginpage_signin">
                  {this.state.isLogin ? <SignIn /> : <SignUp />}

                  <div className="login__ordiv">
                    <div className="login__dividor"></div>
                    <div className="login__or">OR</div>
                    <div className="login__dividor"></div>
                  </div>

                  <div className="login__fb">
                    <img src={fb} width="15px" style={{ marginRight: "5px" }} />
                    Log in with Facebook
                  </div>
                  <div className="login_forgt"> Forgot password?</div>
                </div>
              </div>

              <div className="loginpage__signupoption">
                {this.state.isLogin ? (
                  <div className="loginPage__signin">
                    Don't have an account?{" "}
                    <span
                      onClick={this.changeLogin}
                      style={{ fontWeight: "bold", color: "#0395F6" }}
                    >
                      Sign up
                    </span>
                  </div>
                ) : (
                  <div className="loginPage__signup">
                    Have an account?{" "}
                    <span
                      onClick={this.changeLogin}
                      style={{ fontWeight: "bold", color: "#0395F6" }}
                    >
                      Sign in
                    </span>
                  </div>
                )}
              </div>

              <div className="loginPage__downloadSection">
                <div>Get the app.</div>
                <div className="loginPage__option">
                  <img
                    className="loginPage_dwimg"
                    src={appstore}
                    width="136px"
                  />
                  <img
                    className="loginPage_dwimg"
                    src={playstore}
                    width="136px"
                  />
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    );
  }
}
export default LoginPage;
