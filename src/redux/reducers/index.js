const initialState = {
  books: [],
  loading: true,
  error: null,
  items: [{
      id: 6,
      name: "The Girl Who Drank the Moon",
      count: 2,
      price: 4.49
    },
    {
      id: 5,
      name: "A Witch's Guide",
      count: 3,
      price: 21.99
    },
    {
      id: 1,
      name: "Fairy Portraits",
      count: 1,
      price: 9.49
    }
  ],
  totalInCart: 80,
};


const reducer = function (state = initialState, actions) {
  let totalInCart = state.totalInCart;

  switch (actions.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
          loading: true,
          error: null,
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: actions.payload,
          loading: false,
          error: null,
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        books: [],
          loading: false,
          error: actions.payload,
      };
    case "ADD_ITEM_TO_CART":
      let {
        id, name, price
      } = actions.payload;
      const newItem = {
        id,
        name,
        count: 1,
        price: Number(price),
      };
      const newItems = [newItem, ...state.items];
      totalInCart += newItem.price;
      return {
        ...state,
        items: newItems,
          totalInCart,
      };
    case "ITEM_DECRESS":
      let decItems = state.items.map(item => {
        if (item.id === actions.payload) {
          const count = item.count + 1;
          totalInCart += item.price;
          return {
            ...item,
            count: count
          }
        };
        return item;
      })
      return {
        ...state,
        items: decItems,
          totalInCart,
      };
    case "ITEM_INCRESS":
      let incItems = state.items.map(item => {
        if (item.id === actions.payload) {
          let count = 0
          if (item.count > 0) {
            count = item.count - 1;
            totalInCart -= item.price;
          };
          return {
            ...item,
            count
          }
        };
        return item;
      })
      return {
        ...state,
        items: incItems,
          totalInCart,
      };
    case "ITEM_DELETE":
      let delItems = state.items.filter(item => {
        if (item.id === actions.payload) {
          totalInCart -= (item.price * item.count);
          return false
        };
        return true;
      })
      return {
        ...state,
        items: delItems,
          totalInCart,
      };
    default:
      return state;
  };
  // let sum = (acc, cur) => acc + cur;
  // state.items
  //   .map(item => item.count)
  //   .reduce(sum, 0)
  // state = {
  //   ...state,
  //   totalInCart: total
  // }
};

export default reducer;