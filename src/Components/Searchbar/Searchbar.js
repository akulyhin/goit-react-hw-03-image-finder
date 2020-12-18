import React, { Component } from "react";
import styles from "./Searchbar.module.css";

export default class Searchbar extends Component {
  state = {
    query: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { query } = this.state;
    this.props.onSubmit({ query });
  };

  handleInput = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { query } = this.state;

    return (
      <>
        <header className={styles["Searchbar"]}>
          <form className={styles["SearchForm"]} onSubmit={this.handleSubmit}>
            <button type="submit" className={styles["SearchForm-button"]}>
              <span className={styles["SearchForm-button-label"]}>Search</span>
            </button>

            <input
              className={styles["SearchForm-input"]}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={query}
              onChange={this.handleInput}
            />
          </form>
        </header>
      </>
    );
  }
}
