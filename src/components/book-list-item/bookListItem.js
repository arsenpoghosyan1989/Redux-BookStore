import React from "react";
import "./bookListItem.scss";

const BookListItem = ({ book, onClickAdd, items }) => {
  const { img, author, title, id, price, rating } = book;
  return (
    <>
      <img src={img} alt={img} className="booksImage" />
      <div>
        <span className="author">
          <i>author:</i> <b>{author}</b>{" "}
        </span>
        <span className="rating">
          Rating <span>{rating}</span>
        </span>
      </div>
      <h5>{title}</h5>
      <h3>Price: {price}</h3>
      <div
        className="btn btn-info"
        onClick={() => {
          let isItemInCart = false;
          items.forEach((item) => {
            if (item.id === id) isItemInCart = true;
          });
          console.log(isItemInCart);
          onClickAdd(id);
        }}
      >
        <i className="fas fa-plus"></i> Add To Cart
      </div>
    </>
  );
};

export default BookListItem;
