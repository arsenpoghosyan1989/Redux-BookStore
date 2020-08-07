const booksRequested = function () {
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
}
const booksLoaded = function (newBooks) {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks,
    }
}
const booksError = function (err) {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: err,
    }
}
const addItemToCart = function (info) {
    return {
        type: 'ADD_ITEM_TO_CART',
        payload: info,
    }
}
const itemDecress = function (id) {
    return {
        type: "ITEM_DECRESS",
        payload: id,
    }
}
const itemIncress = function (id) {
    return {
        type: "ITEM_INCRESS",
        payload: id,
    }
}
const itemDelete = function (id) {
    return {
        type: "ITEM_DELETE",
        payload: id,
    }
}

const fetchBooks = (bookStoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookStoreService
        .getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
}


export {
    fetchBooks,
    addItemToCart,
    itemDecress,
    itemIncress,
    itemDelete,
}