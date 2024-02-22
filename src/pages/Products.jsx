import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/products/actions";
import { addToCart } from "../redux/cart/actions";
import Swal from "sweetalert2";

const Products = () => {
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleClick = (product) => {
    dispatch(addToCart(product));
    Swal.fire({
      title: "Product Added",
      icon: "success",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
      toast: true,
      position: "top",
    });
  };

  return (
    <div className="container">
      <div className="row mt-5 g-3">
        {products &&
          products.map((product) => {
            return (
              <div className="col-md-3" key={product.id}>
                <div className="card ms-2 me-2">
                  <img src={product.image} alt="..." className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.describtion}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <button
                      className="btn btn-sm btn-outline-dark"
                      onClick={() => handleClick(product)}
                    >
                      ADD to Card
                    </button>
                    <span>${product.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
