import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  incrementQuantity,
  decrementQuantity,
  removeProduct,
  restCart,
} from "../redux/cart/actions";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const [totalCost, setTotalCost] = useState(0);
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const computeTotalCost = () => {
    if (cart.lenght !== 0) {
      const prices = cart.map((p) => p.price * p.quantity);
      const totalCost = prices.reduce((a, c) => a + c, 0);
      setTotalCost(totalCost);
    } else return 0;
  };

  useEffect(() => {
    computeTotalCost();
  }, [computeTotalCost]);

  const handleDecrement = (product) => {
    dispatch(decrementQuantity(product));
  };

  const handleIncrement = (product) => {
    dispatch(incrementQuantity(product));
  };

  const handleDelete = (product) => {
    dispatch(removeProduct(product));
    Swal.fire({
      title: "Product Removed",
      icon: "warning",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
      toast: true,
      position: "top",
    });
  };

  const handleClear = () => {
    dispatch(restCart());
    Swal.fire({
      title: "Cart Cleard",
      icon: "warning",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
      toast: true,
      position: "top",
    });
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className="col-md-12 text-center">
          <i className="bi bi-basket-fill" style={{ fontSize: "100px" }}></i>
          <h3 className="text-bold text-danger">Cart is Empty</h3>
          <Link to="/products" className="btn btn-dark mt-3">
            GO to Shop
          </Link>
        </div>
      ) : (
        <section className="h-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                </div>

                {cart &&
                  cart.map((product) => (
                    <div className="card rounded-3 mb-4" key={product.id}>
                      <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={product.image}
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-bold mb-2">{product.name}</p>
                            <p>{product.describtion}</p>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onClick={() => handleDecrement(product)}
                              disabled={product.quantity > 1 ? false : true}
                            >
                              <i className="bi bi-cloud-minus text-dark fs-3"></i>
                            </button>

                            <span className="self-align-center badge bg-primary ms-3 me-3 pt-3">
                              {product.quantity}
                            </span>

                            <button
                              className="btn btn-link px-2"
                              onClick={() => handleIncrement(product)}
                            >
                              <i className="bi bi-cloud-plus text-dark fs-3"></i>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">${product.price}</h5>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <button
                              className="btn btn-link text-danger"
                              onClick={() => handleDelete(product)}
                            >
                              <i className="bi bi-trash3-fill fs-3"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                <div className="card">
                  <div className="card-body d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-warning btn-block btn-lg"
                      onClick={handleClear}
                    >
                      Clear Cart
                    </button>
                    <span className="badge bg-dark fs-2">${totalCost}</span>
                    <button
                      type="button"
                      className="btn btn-success btn-block btn-lg"
                    >
                      Proceed to Pay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ShoppingCart;
