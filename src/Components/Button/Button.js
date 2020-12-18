import React, { Component } from "react";
import styles from "./Button.module.css";

export default class Button extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button
          type="button"
          className={styles["Button"]}
          onClick={this.props.onLoadMore}
        >
          Load More
        </button>
      </div>
    );
  }
}
