import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3 className="dark:text-gray-200">Order Page</h3>
      <div>
        {orders.length === 0 ? (
          <p className="dark:text-gray-300">No orders found.</p>
        ) : (
          orders.map((order, index) => {
            const date = new Date(order.date); // Convert the order date
            const options = { year: "numeric", month: "long", day: "numeric" };
            const formattedDate = date.toLocaleDateString("en-US", options);

            return (
              <div
                className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700 dark:text-gray-400 dark:border-gray-400"
                key={index}
              >
                <img
                  className="w-12"
                  src={assets.parcel_icon}
                  alt="Parcel Icon"
                />
                <div>
                  <div className="dark:text-gray-300">
                    {order.items.map((item, index) => (
                      <p className="py-0.5" key={index}>
                        {item.name} X {item.quantity} <span>{item.size}</span>
                        {index < order.items.length - 1 && ", "}
                      </p>
                    ))}
                  </div>
                  <p className="mt-3 mb-2 font-medium dark:text-gray-300">
                    {order.address.firstName} {order.address.lastName}
                  </p>
                  <div>
                    <p>
                      {order.address.street}, {order.address.city},{" "}
                      {order.address.state}, {order.address.country},{" "}
                      {order.address.zip}
                    </p>
                  </div>
                  <p>{order.address.phone}</p>
                </div>
                <div>
                  <p className="text-sm sm:text-[15px] dark:text-gray-300">
                    Items: {order.items.length}
                  </p>
                  <p className="mt-3">Method: {order.paymentMethod}</p>
                  <p>Payment: {order.payment ? "Done" : "Pending"}</p>
                  <p>Date: {formattedDate}</p>{" "}
                  {/* Use the formatted date here */}
                </div>
                <div>
                  <p className="text-sm sm:text-[15px] dark:text-gray-300">
                    {currency} {order.amount}
                  </p>
                  <select
                    onChange={(event) => statusHandler(event, order._id)}
                    value={order.status}
                    className="p-2 font-semibold dark:text-gray-600"
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Orders;
