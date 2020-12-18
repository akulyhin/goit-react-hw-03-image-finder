import React, { Component } from "react";
import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class Loaders extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Loading...</h3>
        <Loader type="ThreeDots" color="#3f51b5" height={80} width={80} />
      </div>
    );
  }
}
