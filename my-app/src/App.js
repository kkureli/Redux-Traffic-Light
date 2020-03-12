import React from "react";

import style from "./App.module.css";
import { connect } from "react-redux";
import * as actionTypes from "./store/actions";

class App extends React.Component {
  message = () => {
    if (this.props.light === "red") {
      return "STOP, LIGHT IS RED!";
    } else if (this.props.light === "yellow") {
      return "SLOW, LIGHT IS YELLOW!";
    } else if (this.props.light === "green") {
      return "GOOO, LIGHT IS GREEN";
    }
  };

  changeLight = () => {
    if (this.props.light === "red") {
      return this.props.yellowLight();
    } else if (this.props.light === "yellow") {
      return this.props.greenLight();
    } else {
      return this.props.redLight();
    }
  };

  componentDidMount() {
    setInterval(this.changeLight, 3000);
  }

  render() {
    // setTimeout(() => {
    //   this.props.yellowLight();
    // }, 5000);

    return (
      <div className={style.App}>
        <div className={style.buttons}>
          {console.log(this.props.light)}

          <div
            className={
              this.props.light === "red" ? style.redLight : style.redHide
            }
          ></div>
          <div
            className={
              this.props.light === "yellow"
                ? style.yellowLight
                : style.yellowHide
            }
          ></div>
          <div
            className={
              this.props.light === "green" ? style.greenLight : style.greenHide
            }
          ></div>
        </div>
        {this.message()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    light: state.currentLight
  };
};

const mapDispatchToProps = dispatch => {
  return {
    redLight: () => {
      dispatch({ type: actionTypes.RED_LIGHT });
    },
    yellowLight: () => {
      dispatch({ type: actionTypes.YELLOW_LIGHT });
    },
    greenLight: () => {
      dispatch({ type: actionTypes.GREEN_LIGHT });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
