import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { cart } = useSelector((state) => state.cart);
  const [subQty, setSubQty] = useState(0);
  const sumSubQty = () => {
    if (cart.lenght !== 0) {
      const quantityList = cart.map((p) => p.quantity);
      const sum = quantityList.reduce((a, c) => a + c, 0);
      setSubQty(sum);
    } else return 0;
  };

  useEffect(() => {
    sumSubQty();
  }, [sumSubQty]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1 className="navbar-brand">Shop</h1>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }
              >
                Products
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/cart"
                className={(navData) =>
                  navData.isActive
                    ? "nav-link p-1 me-3 active"
                    : "nav-link p-1 me-3"
                }
              >
                {subQty ? (
                  <span className="badge rounded-pill bg-primary me-1">
                    {subQty}
                  </span>
                ) : undefined}

                <i className="bi bi-basket-fill fs-4"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
