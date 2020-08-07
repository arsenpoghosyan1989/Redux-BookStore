import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import BookstoreService from "./services/bookstore-service";
import { BookstoreServiceProvider } from "./components/bookstore-Service-Context";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundry from "./components/error-boundry";
import App from "./components/app";
import store from "./redux/store";

const bookStoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookStoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
