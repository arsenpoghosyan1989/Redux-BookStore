import React from "react";
import { BookstoreServiceConsumer } from "../bookstore-Service-Context";

const WithBookStoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {(bookStoreService) => {
          return <Wrapped {...props} bookStoreService={bookStoreService} />;
        }}
      </BookstoreServiceConsumer>
    );
  };
};

export default WithBookStoreService;
