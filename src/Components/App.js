import React, { Component } from "react";

import fetchPhotos from "../Services/PhotoApi";
import Loader from "./Loader";
import styles from "./App.module.css";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default class App extends Component {
  state = {
    photos: [],
    loading: false,
    query: "",
    error: null,
    page: 1,
    largeImageURL: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    const { page, query } = this.state;

    fetchPhotos(query, page)
      .then((photos) => this.setState({ photos }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  searchPhotos = (search) => {
    const { query } = search;
    this.setState({
      query: query,
      photos: [],
    });
  };

  loadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  onShowModal = (largeImageURL) => {
    this.setState({ largeImageURL: largeImageURL });
  };

  toggleModal = (e) => {
    this.setState({
      largeImageURL: e,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const { page, query } = this.state;

    if (prevQuery !== query) {
      this.setState({ loading: true });

      fetchPhotos(query, page)
        .then((photos) =>
          this.setState((prevState) => ({
            photos: [...prevState.photos, ...photos],
            page,
          }))
        )
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }

    if (prevState.page !== page) {
      this.setState({ loading: true });

      fetchPhotos(query, page)
        .then((photos) =>
          this.setState((prevState) => ({
            photos: [...prevState.photos, ...photos],
            page,
          }))
        )
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }))
        .then(() => {
          window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior: "smooth",
          });
        });
    }
  }

  render() {
    const { photos, loading, error, largeImageURL } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.searchPhotos} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {loading ? (
          <Loader />
        ) : (
          <ImageGallery>
            {photos.map(({ id, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                webURL={webformatURL}
                largeImageURL={largeImageURL}
                onShowModal={this.onShowModal}
              />
            ))}
          </ImageGallery>
        )}
        {photos.length > 11 && <Button onLoadMore={this.loadMore} />}
        {largeImageURL && (
          <Modal
            largeImageURL={largeImageURL}
            onCloseModal={this.toggleModal}
          />
        )}
      </div>
    );
  }
}
