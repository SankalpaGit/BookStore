import React, { useState } from 'react';

const Cart = () => {
  const initialCartItems = [
    {
      id: 1,
      title: "Book 1",
      price: 19.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Book 2",
      price: 29.99,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleIncrement = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrement = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="bg-white p-4 shadow-lg rounded-lg flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover mr-4"
                  />
                  <div className="flex-grow">
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleDecrement(item.id)}
                        className="px-2 py-1 bg-gray-300 rounded-l"
                      >
                        -
                      </button>
                      <p className="px-4">{item.quantity}</p>
                      <button
                        onClick={() => handleIncrement(item.id)}
                        className="px-2 py-1 bg-gray-300 rounded-r"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="mb-4">
              <p className="text-lg">
                Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </p>
              <p className="text-lg">
                Total Price: ${totalPrice.toFixed(2)}
              </p>
            </div>
            <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
