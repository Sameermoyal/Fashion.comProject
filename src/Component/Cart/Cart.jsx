import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsonData from "../Json_File/product.json";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const [cartProduct, setCartProduct] = useState([]);
  const { id } = useParams();

  const handleCartItem = () => {
    const prevCartItem = JSON.parse(localStorage.getItem("cartItem")) || [];
    if (!prevCartItem.includes(id)) {
      prevCartItem.push(id);
      localStorage.setItem("cartItem", JSON.stringify(prevCartItem));
    }
  };

  const removeItem = (rm_id) => {
    const prevCartItem = JSON.parse(localStorage.getItem("cartItem")) || [];
    const filterItem = prevCartItem.filter((i) => i != rm_id);
    localStorage.setItem("cartItem", JSON.stringify(filterItem));

   
    const productList = [...jsonData.mens, ...jsonData.womens, ...jsonData.childs];
    const updatedCart = productList.filter((product) =>
      filterItem.includes(String(product.id))
    );
    setCartProduct(updatedCart);
  };

  
  useEffect(() => {
    if (id) {
      handleCartItem();
    }

    const prevCartItem = JSON.parse(localStorage.getItem("cartItem")) || [];
    const productList = [...jsonData.mens, ...jsonData.womens, ...jsonData.childs];
    const selectProduct = productList.filter((product) =>
      prevCartItem.includes(String(product.id))
    );

    setCartProduct(selectProduct);
  }, [id]);

  return (
    <>
      <div className="details-container">
        <h2>CART PAGE</h2>
        {cartProduct.length > 0 ? (
          cartProduct.map((item) => (
            <div
              className="details-oneProduct"
              key={item.id}
            >
              <img className="details-image" src={item.img} alt={item.title} />
              <div>
                <div className="details-title">{item.title}</div>
                <div className="details-price">{item.price}</div>
                <div className="details-description">{item.description}</div>
                <div>
                  <Link to={`/buy/${item.id}`}>
                    <button>BUY NOW</button>
                  </Link>
                  <button onClick={() => removeItem(item.id)}>REMOVE FROM CART</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>
    </>
  );
}

export default Cart;
