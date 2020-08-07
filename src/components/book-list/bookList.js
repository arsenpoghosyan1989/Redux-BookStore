import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { fetchBooks, addItemToCart } from "../../redux/actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { isItemInCart } from "../../utils";
import "./bookList.scss";

import WithBookStoreService from "../hoc";
import { connect } from "react-redux";

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, items, loading, error, addItemToCart } = this.props;
    if (error) {
      return <ErrorIndicator />;
    }
    return loading ? (
      <Spinner />
    ) : (
      <BookList books={books} items={items} addItemToCart={addItemToCart} />
    );
  }
}

const BookList = ({ books, items, addItemToCart }) => {
  console.log(items);
  const onClickAdd = (id) => {
    const info = {};
    books.forEach((book) => {
      if (book.id === id) {
        info.name = book.title;
        info.price = book.price.slice(0, -1);
        info.id = id;
      }
    });
    if (isItemInCart(id, items)) {
      return alert("item already added to cart");
    }
    addItemToCart(info);
  };
  return (
    <ul className="mx-auto">
      {books.map((book) => (
        <li key={book.id}>
          <BookListItem book={book} onClickAdd={onClickAdd} items={items} />
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ books, items, loading, error }) => {
  return { books, items, loading, error };
};
const mapDispatchToProps = (dispatch, { bookStoreService }) => {
  return {
    fetchBooks: fetchBooks(bookStoreService, dispatch),
    addItemToCart: (info) => {
      dispatch(addItemToCart(info));
    },
  };
};
export default WithBookStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
);
