import React from "react";
import { connect } from "react-redux";
import { itemIncress, itemDecress, itemDelete } from "../../redux/actions";
import "./pages.css";

const CartPage = (props) => {
  const { items, onDecress, onIncress, onDelete, totalInCart } = props;
  console.log({ totalInCart });
  function renderRow(item, index) {
    const { name, count, price, id } = item;
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>
          <h4>{count}</h4>
        </td>
        <td>{Math.ceil(count * price * 100) / 100}$</td>
        <td>
          <span>
            <div
              onClick={() => {
                onDecress(id);
              }}
              className="btn btn-outline-success"
            >
              <i className="fas fa-plus"></i>
            </div>
            <div
              onClick={() => {
                onIncress(id);
              }}
              className="btn btn-outline-warning"
            >
              <i className="fas fa-minus"></i>
            </div>
            <div
              onClick={() => {
                onDelete(id);
              }}
              className="btn btn-outline-danger"
            >
              <i className="fas fa-trash"></i>
            </div>
          </span>
        </td>
      </tr>
    );
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th style={{ width: "40%" }}>Item Name</th>
            <th style={{ width: "25%" }}>Count</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="row">
        <div className="col-sm-12 text-right">
          <h4 className="float-right">Total {totalInCart.toFixed(2)}$</h4>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = ({ items, totalInCart }) => {
  return {
    items,
    totalInCart,
  };
};
const mapDispachToProps = (dispatch) => {
  return {
    onDecress: (id) => {
      dispatch(itemDecress(id));
    },
    onIncress: (id) => {
      dispatch(itemIncress(id));
    },
    onDelete: (id) => {
      dispatch(itemDelete(id));
    },
  };
};
export default connect(mapStateToProps, mapDispachToProps)(CartPage);
