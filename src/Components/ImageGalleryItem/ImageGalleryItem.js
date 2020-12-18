import React, { Component } from "react";
import styles from "./Imagegalleryitem.module.css";

export default class ImageGalleryItem extends Component {
  getLargeImage = () => {
    this.props.onShowModal(this.props.largeImageURL);
  };

  render() {
    const { webURL } = this.props;
    return (
      <>
        <li className={styles["ImageGalleryItem"]}>
          <img
            className={styles["ImageGalleryItem-image"]}
            src={webURL}
            alt=""
            onClick={this.getLargeImage}
          />
        </li>
      </>
    );
  }
}
