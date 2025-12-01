import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, updateItem, getTotal } = useCart();
  const navigate = useNavigate();
  const [editingIndex, setEditingIndex] = useState(null);
  const [editColor, setEditColor] = useState('');
  const [editSize, setEditSize] = useState('');

  return (
    <div className="min-h-screen py-12 px-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-black text-white rounded-full  transition-colors cursor-pointer"
      >
        X
      </button>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center">
                      <img src={item.src} alt={item.title} className="w-16 h-16 object-cover rounded mr-4" />
                      <div>
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        {editingIndex === index ? (
                          <div className="mt-2">
                            <select
                              value={editColor}
                              onChange={(e) => setEditColor(e.target.value)}
                              className="mr-2 px-2 py-1 border rounded cursor-pointer"
                            >
                              <option value="" disabled>Select Color</option>
                              <option value="Red">Red</option>
                              <option value="Blue">Blue</option>
                              <option value="Black">Black</option>
                              <option value="Green">Green</option>
                              <option value="White">White</option>
                            </select>
                            <select
                              value={editSize}
                              onChange={(e) => setEditSize(e.target.value)}
                              className="mr-2 px-2 py-1 border rounded cursor-pointer"
                            >
                              <option value="" disabled>Select Size</option>
                              <option value="S">S</option>
                              <option value="M">M</option>
                              <option value="L">L</option>
                              <option value="XL">XL</option>
                              <option value="XXL">XXL</option>
                            </select>
                            <button
                              onClick={() => {
                                updateItem(index, editColor, editSize);
                                setEditingIndex(null);
                              }}
                              className="px-2 py-1 bg-black text-white rounded hover:bg-white hover:text-black transition-colors hover:border-1 cursor-pointer"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setEditingIndex(null)}
                              className="ml-2 px-2 py-1 bg-white border-1 text-black rounded hover:bg-black
                              hover:text-white transition-colors cursor-pointer"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <p className="text-gray-600">Color: {item.color}, Size: {item.size}</p>
                        )}
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => decreaseQuantity(index)}
                            className="px-2 py-1 bg-gray-300 text-gray-700 rounded-l hover:bg-gray-400 cursor-pointer"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 bg-gray-100">{item.quantity}</span>
                          <button
                            onClick={() => increaseQuantity(index)}
                            className="px-2 py-1 bg-gray-300 text-gray-700 rounded-r hover:bg-gray-400 cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-gray-600">{item.prc}</p>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <button
                        onClick={() => {
                          setEditingIndex(index);
                          setEditColor(item.color);
                          setEditSize(item.size);
                        }}
                        className="px-4 py-2 bg-white text-black rounded-lg hover:bg-black
                        hover:text-white transition-colors cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="px-4 py-2 bg-black text-white rounded outline-white hover:bg-white
                        hover:text-black transition-colors cursor-pointer hover:border-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between items-center">
                <p className="text-xl font-semibold">Total: ${getTotal().toFixed(2)}</p>
                <div>
                  <button
                    onClick={() => navigate('/')}
                    className="px-4 py-2 bg-transparent text-black rounded-lg outline-black hover:bg-black hover:text-white transition-colors mr-4 cursor-pointer font-semibold border-1"
                  >
                    Continue Shopping
                  </button>
                 
                  <button className="px-6 py-3 bg-transparent text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-colors cursor-pointer border-1">
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
