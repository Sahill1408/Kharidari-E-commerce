import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";

import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14 px-4 sm:px-6 lg:px-8">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR "} text2={" CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-1 sm:grid-cols-3 items-center gap-4"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium dark:text-white">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-3 mt-2 dark:text-gray-400">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p
                      className="px-2 sm:px-3 sm:py-1 border bg-slate-50 dark:bg-gray-300 dark:text-black 
                    dark:border-gray-500"
                    >
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className="border max-w-[80px] sm:max-w-[100px] px-1 py-1 text-center dark:bg-gray-200 dark:text-gray-800 dark:border-gray-500"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />

              <div className="flex justify-end">
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  src={assets.bin_icon}
                  className="w-4 sm:w-5 cursor-pointer dark:invert"
                  alt="Delete"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black dark:bg-[#222] hover:bg-[#222]  dark:hover:bg-[#333] font-medium text-white text-sm my-8 px-8 py-3"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
